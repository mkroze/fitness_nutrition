import Card from "@/components/Card";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Recipees() {
  const [hitsList, setHitsList] = useState([]);
  const [query, setQuery] = useState(""); // State to store the user's input

  // Function to fetch data based on the user input
  const fetchRecipes = () => {
    let url = `/api/data?query=${query}`; // Use the query state in the API request
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.hits);
        setHitsList(res.hits);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };
  useEffect(() => {
    let url = `/api/data?query=chicken`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.hits);
        setHitsList(res.hits)
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  },[]);

  return (
    <div>
      <h1 className="text-primary text-3xl text-center font-subtitle text-xl">
        The Recipe Finder
      </h1>
      <div className="my-4 mx-8 flex justify-center mt-8">
        <input
          type="text"
          className="w-1/3 rounded-md bg-base-300 p-4 font-libre text-neutral placeholder:font-libre placeholder:text-primary"
          id="searchQuery"
          placeholder="Insert ingredients"
          value={query}
          onChange={e => setQuery(e.target.value)} // Update query state on input change
        />
        <button onClick={fetchRecipes} className="btn btn-secondary hover:btn-primary ml-8 font-libre text-white p-2 rounded-md p-4">Search</button> {/* Button to trigger the search */}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
        {hitsList.map((hit, index) => (
          <Card key={index} hit={hit} /> // Added key prop for better performance
        ))}
      </div>
    </div>
  );
}