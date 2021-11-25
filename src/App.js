import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "../src/components/home/Home.jsx";
import Profile from "../src/components/profile/Profile.jsx";
import { useState, useEffect } from "react";
import { search } from "./helpers/index";
import Favorites from "./components/favorites/Favorites";

function App() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getSearchedData = async (query) => {
    const data = await search(query);
    setData(data);
    setRefresh(true);
  };

  useEffect(() => {
    // getSearchedData();
    console.log(data.data);
  }, [refresh]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home data={data} getSearchedData={getSearchedData} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorites/jobLists/:company" element={<Profile />} />
          <Route path="/jobLists/:company" element={<Profile />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
