import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from "use-debounce";
const SearchBar: React.FC<{
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}> = ({ searchWord, setSearchWord }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={(query) => setSearchWord(query)}
      value={searchWord}
    ></Searchbar>
  );
};
export default SearchBar;
