'use client';

import React, { useState } from "react";
import { Popover, Avatar, Input, Spin, Rate, Divider, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../styles/Searchbar.css";
import { formatRating } from "@/values";
import { trackSearch } from "@/analytics/analytics_invokers";
import Image from "next/image";

const { Search } = Input;

interface SearchBarProps {
  placeholder: string;
  apiCall: (setShowSpinner: (loading: boolean) => void, query: string) => Promise<any>;
  onResultClick: (result: any) => void;
  style?: React.CSSProperties;
  isInNavbar?: boolean;
  id?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
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
  const [popoverVisible, setPopoverVisible] = useState(false);

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
        setPopoverVisible(true);
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
    setShowSpinner(false);
  };

  const handleResultClick = (result: any) => {
    if (onResultClick) {
      onResultClick(result);
    }
    setSearchQuery("");
    setSearchResults([]);
    setPopoverVisible(false);
  };

  const handlePopoverClose = () => {
    setPopoverVisible(false);
  };

  const popoverContent = (
    <div
      style={{
        maxHeight: searchResults?.length > 5 ? "250px" : "auto",
        overflowY: searchResults?.length > 5 ? "auto" : "visible",
      }}
    >
      {searchResults.map((result: any, index) => (
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
          {index < searchResults?.length - 1 && <Divider className="my-1" />}
        </div>
      ))}
    </div>
  );

  return (
    <div style={style} id={id?.toString()}>
      <Popover
        content={popoverContent}
        trigger="click"
        open={popoverVisible && searchResults?.length > 0}
        placement="bottom"
        onOpenChange={(visible) => setPopoverVisible(visible)}
        overlayClassName="search-popover"
      >
        <Search
          placeholder={placeholder}
          onSearch={handleSearch}
          enterButton
          value={searchQuery}
          className="searchbar"
          onChange={(e) => setSearchQuery(e.target.value)}
          onPressEnter={handleSearch}
          style={{
            width: isInNavbar ? (typeof window !== 'undefined' && window.innerWidth < 520 ? 230 : 300) : 300,
          }}
        />
      </Popover>
    </div>
  );
};

export default SearchBar;