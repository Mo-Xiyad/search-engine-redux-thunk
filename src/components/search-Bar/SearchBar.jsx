import React from "react";
import { Button, Form } from "react-bootstrap";
import "./search-bar.css";
import { useState, useEffect } from "react";

function SearchBar({ getSearchedData }) {
  const [query, setQuery] = useState();

  useEffect(() => {
    getSearchedData(query);
  }, [query]);

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <Form.Control
              type="text"
              className="search_input d-inline"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                // getSearchedData(query);
              }}
              placeholder="Search..."
            />
            <Button
              className="search_icon d-inline"
              onClick={() => getSearchedData(query)}
            >
              <i className="fas fa-search" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
