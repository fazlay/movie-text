import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

function HomePage() {
  const [quratedMovieList, setQuratedMovieList] = useState([]);
  const [serchText, setSerchText] = useState("avatar");

  const handleSubmit = (e) => {
    console.log(e.target.search.value);
    setSerchText(e.target.search.value);
  };
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=48bfd75c06eb21f572e6798201c0c20b&page=1&query=${serchText}`;

  useEffect(() => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuratedMovieList(data.results);
        console.log(data.results);
      });
  }, [serchText]);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold py-4 mb-4 text-grey-800">
        The Ultimage Movie DB{" "}
      </h1>

      <div className="py-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            className="border-2 rounded px-4 border-green-700"
          />

          <input
            type="submit"
            value="submit"
            className="mx-4 bg-red-500 px-4 py-1 rounded"
          />
        </form>
      </div>
      <div className="grid grid-cols-4 gap-8 py-4">
        {quratedMovieList.map((singleMovie) => (
          <SingleCard
            singleMovie={singleMovie}
            key={singleMovie.id}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
