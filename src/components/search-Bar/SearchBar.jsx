import React from "react";
import { Button, Form } from "react-bootstrap";
import "./search-bar.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchResultsAction } from "../../redux/actions";

const mapStateToProps = (state) => ({
  isLoading: state.searchResults.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  performSearch: (query, isLoading) => {
    dispatch(searchResultsAction(query, isLoading));
  },
});

function SearchBar({ performSearch, isLoading }) {
  const [query, setQuery] = useState();

  useEffect(() => {
    performSearch(query, isLoading);
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
              }}
              placeholder="Search..."
            />
            <Button
              className="search_icon d-inline"
              onClick={() => performSearch(query, isLoading)}
            >
              <i className="fas fa-search" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
