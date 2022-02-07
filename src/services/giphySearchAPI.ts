import axios from "axios";

export function getGiphySearchAPI(query: string) {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY || "";
  return axios
    .get<any>("https://api.giphy.com/v1/gifs/search", {
      params: { q: query, api_key: apiKey },
    })
    .then((response) => response.data);
}
