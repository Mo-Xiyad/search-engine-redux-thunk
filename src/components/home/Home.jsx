// import {} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./home.css";
import SearchBar from "../search-Bar/SearchBar";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { addToFavorites, removeSelectedFavorites } from "../../redux/actions";

const mapStateToProps = (state) => ({
  favorites: state.favoritesList.list,
  data: state.searchResults.data,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemToAdd) => {
    dispatch(addToFavorites(itemToAdd));
  },
  removerAllFormFav: (itemToRemove) => {
    dispatch(removeSelectedFavorites(itemToRemove));
  },
});

const Home = ({
  data,
  getSearchedData,
  addItem,
  favorites,
  removerAllFormFav,
}) => {
  const [selectedArray, setSelected] = useState([]);

  const SelectFavorites = (element) => {
    const { _id } = element;
    const index = favorites.indexOf(_id);
    if (index === -1) {
      setSelected([...favorites, element]);
      addItem(element);
    } else {
      setSelected([...favorites.filter((el) => el._id !== element._id)]);
    }
  };

  useEffect(() => {}, [data, selectedArray]);

  return (
    <div className="container h-100">
      <SearchBar getSearchedData={getSearchedData} />
      <Link to={"/favorites"}>
        <Button>Check out Favorites</Button>
      </Link>
      <div className="container mt-5">
        {data &&
          data.map((result, i) => (
            <div
              className={
                favorites.map((el) => el._id).includes(result._id)
                  ? "row selected-job"
                  : "row"
              }
              key={i}
            >
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="well search-result">
                  <div className="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
                    <Link to={`jobLists/${result.company_name}`}>
                      <h3>{result.title}</h3>
                    </Link>
                    <p>
                      Ut quis libero id orci semper porta ac vel ante. In nec
                      laoreet sapien. Nunc hendrerit ligula at massa sodales,
                      ullamcorper rutrum orci semper.
                    </p>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                    <div>
                      <small>
                        Company: <strong> {result.company_name}</strong>
                      </small>
                    </div>
                    <div>
                      <small>
                        Location:{" "}
                        <strong> {result.candidate_required_location}</strong>{" "}
                      </small>
                    </div>
                    <div>
                      <small>
                        Job Type: <strong> {result.job_type}</strong>{" "}
                      </small>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          SelectFavorites(result);
                        }}
                      >
                        Add to Favorites
                      </Button>
                    </div>
                    <br />
                    <div>
                      <Button
                        variant="danger"
                        onClick={() => removerAllFormFav(result)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
