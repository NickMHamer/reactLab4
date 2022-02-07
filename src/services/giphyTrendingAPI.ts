// import axios from "axios";

// import { Gifs, GiphyAPIResponse } from "../models/GiphyAPIResponse";

// export function getTrendingAPI() {
//   const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
//   console.log("hi");
//   return axios
//     .get<Gifs[]>("https://api.giphy.com/v1/gifs/trending", {
//       params: {
//         api_key: apiKey,
//         limit: 10,
//       },
//     })
//     .then((response) => response.data);
// }
import axios from "axios";
import { Gifs, GiphyAPIResponse } from "../models/GiphyAPIResponse";

export function getTrendingGif() {
  console.log("hi");
  return axios
    .get<GiphyAPIResponse>(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&rating=g`
    )
    .then((response) => response.data);
}

export function getSearchGif(searchTerm: string) {
  return axios
    .get<any>(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&rating=g&q=${searchTerm}`
    )
    .then((response) => response.data);
}
