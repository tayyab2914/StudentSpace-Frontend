import React, { useState } from 'react';
import { Popover, Avatar, Input, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;

const SearchBar = ({ placeholder, apiCall, onResultClick, style, isInNavbar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  // Handle search click
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setShowSpinner(true);
    try {
      const response = await apiCall(setShowSpinner, searchQuery); // Call the passed-in API function
      setSearchResults(response); // Assuming API returns a list of items
    } catch (error) {
      console.error('Search failed:', error);
    }
    setShowSpinner(false);
  };

  // Handle clicking on a search result
  const handleResultClick = (result) => {
    if (onResultClick) {
      onResultClick(result); // Call the passed-in function to handle result click
    }
    setSearchQuery(''); // Clear search after selection
    setSearchResults([]); // Clear search results
  };

  // Content for the Popover that shows search results
  const popoverContent = (
    <div
      style={{
        maxHeight: searchResults.length > 5 ? '200px' : 'auto', // Limit height for more than 5 items
        overflowY: searchResults.length > 5 ? 'auto' : 'visible', // Enable scroll if more than 5
      }}
    >
      {searchResults.map((result) => (
        <div
          key={result.id}
          onClick={() => handleResultClick(result)}
          className="search-result-item"
          style={{ cursor: 'pointer', padding: '5px 0' }}
        >
          <Avatar src={result.image_url || <UserOutlined />} />
          <span style={{ marginLeft: '10px' }}>{result.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div style={style}>
      <Popover
        content={popoverContent}
        trigger="click"
        visible={searchResults.length > 0}
        placement="bottom"
        overlayClassName="search-popover"
      >
        <Search
          placeholder={placeholder}
          onSearch={handleSearch}
          enterButton
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: isInNavbar ? (window.innerWidth<520 ? 200 : 300) : 300 }}
        />
      </Popover>
    </div>
  );
};

export default SearchBar;
