import { useEffect, useState } from "react";
import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { getSearchGif, getTrendingGif } from "../services/giphyTrendingAPI";

export function Main() {
  const [gifs, setGifs] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<any>("");

  function setSearch(search: string) {
    setSearchTerm(search);
  }

  useEffect(() => {
    if (searchTerm !== "") {
      getSearchGif(searchTerm).then((data) => setGifs(data.data));
    } else {
      getTrendingGif().then((data) => setGifs(data.data));
    }
  }, [searchTerm]);

  console.log(gifs);
  console.log(searchTerm);
  // ASK ABOUT WHY THIS ISN'T EMPTY OR IF IT SHOULD BE

  return (
    <div>
      {/*Main holds the SearchForm and ResultsLists Components */}
      <SearchForm onSubmit={(searchTerm) => setSearch(searchTerm)}></SearchForm>
      <ResultsList gifs={gifs}></ResultsList>
    </div>
  );
}
