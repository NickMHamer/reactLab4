import { useState } from "react";

export function SearchForm(props: { onSubmit: (newSearch: any) => void }) {
  const [searchTerm, setNewSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setNewSearchTerm(e.target.value)}
      ></input>
      <button onClick={() => props.onSubmit(searchTerm)}>Search</button>
    </div>
  );
}
