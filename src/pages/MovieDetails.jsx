import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KEY = "d1c45384";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(movie);

  useEffect(() => {
    // fetchMovieByID();
  }, []);

  async function fetchMovieByID() {
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  }
  if (!movie) return;

  const {
    Actors,
    Director,
    Genre,
    imdbRating,
    Released,
    Plot,
    Poster,
    Writer,
    Runtime,
    BoxOffice,
    Title,
  } = movie;

  return (
    <div className="flex mt-10">
      <div className="w-[30%]  flex items-center justify-center">
        <img src={Poster} alt={Title} />
      </div>
      <div className="w-[70%] p-10 space-y-7">
        <h1 className="flex gap-4 items-end">
          <span className="font-bold text-3xl">{Title}</span>
          <span className="font-thin text-lg"> Directed by </span>
          <span className="text-2xl">{Director}</span>
        </h1>
        <p>{Plot}</p>
        <div className="space-y-2 divide-y divide-stone-300">
          <p className="flex gap-4 items-end">
            <span className="font-bold text-lg">Actors </span>
            <span className="text-blue-400">{Actors}</span>
          </p>
          <p className="flex gap-4 items-end">
            <span className="font-bold text-lg">Writers </span>
            <span className="text-blue-400">{Writer}</span>
          </p>
          <p className="flex gap-4 items-end">
            <span className="font-bold text-lg">Genre </span>
            <span className="text-blue-400">{Genre}</span>
          </p>
          <p className="flex gap-4 items-end">
            <span className="font-bold text-lg">Runtime </span>
            <span className="text-blue-400">{Runtime}</span>
          </p>
          <p className="flex gap-4 items-end">
            <span className="font-bold text-lg">Released </span>
            <span className="text-blue-400">{Released}</span>
          </p>
          <p className="flex gap-4 items-end">
            <span className="font-bold text-lg">BoxOffice </span>
            <span className="text-blue-400">{BoxOffice}</span>
          </p>
          <p className="flex gap-4 items-end">
            <span className="font-bold text-lg">imdbRating </span>
            <span className="text-blue-400">{imdbRating}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
