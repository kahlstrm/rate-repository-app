import React from "react";
import { StateProps } from "../../../types";
import SearchBar from "./SearchBar";
import SortBySelector from "./SortBySelector";

const RepositoryListHeader: React.FC<{ state: StateProps }> = ({ state }) => {
  return (
    <>
      <SearchBar {...state} />
      <SortBySelector {...state} />
    </>
  );
};
export default RepositoryListHeader;
