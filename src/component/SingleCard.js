import React from "react";

const SingleCard = (props) => {
  //{ original_title, poster_path, overview }

  const { original_title, poster_path, overview } = props.singleMovie;
  console.log(
    `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`
  );
  let imgUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
  return (
    <div>
      <img src={imgUrl} />
      <h1 className="font-bold text-left text-3xl pt-4">{original_title}</h1>
      <h1 className="text-left font-semibold text-xl pt-2">Description</h1>
      <p className="font-thin text-left">{overview.slice(0, 200)}</p>
    </div>
  );
};

export default SingleCard;
