import React from "react";
import SearchResults from "./SearchResults";
import "./SearchContainer.css"
interface Props {
  searchData: any[];
}

const SearchContainer = ({ searchData }: Props) => {
  return (
    <div className="centered">
      <SearchResults data={searchData} />
    </div>
  );
};

export default SearchContainer;
