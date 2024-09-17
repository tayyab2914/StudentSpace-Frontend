import React, { useState } from "react";
import { Popover, Avatar, Input, Spin, Rate, Divider, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./styles/Searchbar.css";
import { formatRating } from "../values";
const { Search } = Input;

const SearchBar = ({
  placeholder,
  apiCall,
  onResultClick,
  style,
  isInNavbar,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  // Handle search click
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
console.log(searchQuery)
    setShowSpinner(true);
    try {
      const response = await apiCall(setShowSpinner, searchQuery); // Call the passed-in API function
      setSearchResults(response); // Assuming API returns a list of items
      if(response?.length == 0)
      {
        message.error("No results found")
      }
      console.log(response);
    } catch (error) {
      console.error("Search failed:", error);
    }
    setShowSpinner(false);
  };

  // Handle clicking on a search result
  const handleResultClick = (result) => {
    console.log("result",result)
    
    if (onResultClick) {
      onResultClick(result); // Call the passed-in function to handle result click
    }
    setSearchQuery(""); // Clear search after selection
    setSearchResults([]); // Clear search results
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
              <span className="searchbar-results-rate-count">({result.review_count})</span>
            </span>
          </div>
          {/* Conditionally render Divider */}
          {index < searchResults?.length - 1 && <Divider className="my-1" />}
        </div>
      ))}
    </div>
  );

  return (
    <div style={style}>
      <Popover
        content={popoverContent}
        trigger="click"
        visible={searchResults?.length > 0}
        placement="bottom"
        overlayClassName="search-popover"
        
      >
        <Search
          placeholder={placeholder}
          onSearch={handleSearch}
          enterButton
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: isInNavbar ? (window.innerWidth < 520 ? 230 : 300) : 300,
          }}
        />
      </Popover>
    </div>
  );
};

export default SearchBar;
