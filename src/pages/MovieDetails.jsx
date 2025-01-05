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
    Year,
    Plot,
    Poster,
    Writer,
    Runtime,
    Language,
    BoxOffice,
    Title,
  } = movie;

  return (
    <div className="flex">
      <div className="w-[30%] border border-white">
        <img src={Poster} alt={Title} />
      </div>
      <div className="w-[70%] border border-white">gvdf</div>
    </div>
  );
}

export default MovieDetails;
