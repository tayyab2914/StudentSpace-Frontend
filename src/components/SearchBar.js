import React, { useState } from "react";
import { Popover, Avatar, Input, Spin, Rate, Divider, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./styles/Searchbar.css";
import { formatRating } from "../values";
import { trackSearch } from "../analytics/analytics_invokers";
const { Search } = Input;

const SearchBar = ({
  placeholder,
  apiCall,
  onResultClick,
  style,
  isInNavbar,
  id
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false); // New state for visibility control

  // Handle search click
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setShowSpinner(true);
    try {
      const response = await apiCall(setShowSpinner, searchQuery);
      trackSearch()
      setSearchResults(response);
      if (response?.length == 0) {
        message.error("No results found");
      } else {
        setPopoverVisible(true); // Show popover when results are found
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
    setShowSpinner(false);
  };

  // Handle clicking on a search result
  const handleResultClick = (result) => {
    console.log("result", result);

    if (onResultClick) {
      onResultClick(result);
    }
    setSearchQuery(""); // Clear search after selection
    setSearchResults([]); // Clear search results
    setPopoverVisible(false); // Close popover after selecting a result
  };

  // Handle popover close on outside click or selection
  const handlePopoverClose = () => {
    setPopoverVisible(false);
  };

  // Content for the Popover that shows search results
  const popoverContent = (
    <div
      style={{
        maxHeight: searchResults?.length > 5 ? "250px" : "auto", // Limit height for more than 5 items
        overflowY: searchResults?.length > 5 ? "auto" : "visible", // Enable scroll if more than 5
      }}
    >
      {searchResults.map((result, index) => (
        <div key={result.id}>
          <div
            onClick={() => handleResultClick(result)}
            className="search-result-item"
            style={{ cursor: "pointer", padding: "5px 0" }}
          >
            <Avatar src={result.image_url || <UserOutlined />} />
            <span style={{ marginLeft: "10px" }}>
              {result.name}
              <br />
              <i className="fa-solid fa-star searchbar-results-rate"></i>
              <span>{formatRating(result.overall_rating)}</span>
              <span className="searchbar-results-rate-count">
                ({result.review_count})
              </span>
            </span>
          </div>
          {/* Conditionally render Divider */}
          {index < searchResults?.length - 1 && <Divider className="my-1" />}
        </div>
      ))}
    </div>
  );

  return (
    <div style={style} id={id}>
      <Popover
        content={popoverContent}
        trigger="click"
        visible={popoverVisible && searchResults?.length > 0} // Control visibility
        placement="bottom"
        onVisibleChange={(visible) => setPopoverVisible(visible)} // Manage visibility on manual toggle
        overlayClassName="search-popover"
        onClickOutside={handlePopoverClose} // Close when clicked outside
      >
        <Search
          placeholder={placeholder}
          onSearch={handleSearch}
          enterButton
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onPressEnter={handleSearch} // Execute search on pressing enter
          style={{
            width: isInNavbar ? (window.innerWidth < 520 ? 230 : 300) : 300,
          }}
        />
      </Popover>
    </div>
  );
};

export default SearchBar;
