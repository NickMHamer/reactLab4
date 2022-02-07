import { Gifs } from "../models/GiphyAPIResponse";
import { Result } from "./Result";

export function ResultsList(props: { gifs: Gifs[] }) {
  return (
    <div>
      <h1>Results</h1>

      {props.gifs.map((gif: any) => (
        <Result key={gif.id} gif={gif} />
      ))}
    </div>
  );
}
