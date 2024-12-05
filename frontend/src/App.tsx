import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage";
import SearchWindow from "./components/SearchWindow";
import SearchContainer from "./components/SearchContainer";

const App = () => {
  const [HomepageVisibility, setHomepageVisibility] = useState(true);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const [searchData, setSearchData] = useState<any>(null);

  return (
    <div className="container">
      <Navbar
        onLogoClick={() => {
          setHomepageVisibility(true);
          setSearchVisibility(false);
          setDisplayResults(false);
        }}
        onSearchClick={() => {
          setSearchVisibility(true);
          setHomepageVisibility(false);
          setDisplayResults(false);
        }}
      ></Navbar>
      {HomepageVisibility && <Homepage />}
      {searchVisibility && (
        <SearchWindow
          onSearchClick={(data) => {
            setSearchData(data); 
            setDisplayResults(true);
          }}
        />
      )}
      {displayResults && searchData && (
        <SearchContainer searchData={searchData} />
      )}
    </div>
  );
};

export default App;
