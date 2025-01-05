import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "../components/MovieCard";

const KEY = "d1c45384";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("superman");
  console.log(query);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }
  }

  function handleQuery() {
    fetchMovies();
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-6xl text-[#ddc2a2]">MovieApp</h1>
      <div className="flex gap-4 items-center justify-between rounded-full py-4 px-8 bg-slate-700 w-[30%]">
        <input
          type="text"
          placeholder="Search movies here"
          className="bg-transparent focus:outline-none w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleQuery}>
          <FaSearch />
        </button>
      </div>

      <ul className="max-w-screen-lg grid grid-cols-3 gap-16">
        {movies.map((movie) => (
          <MovieCard key={movie.Title} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
