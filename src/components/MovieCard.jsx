import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function MovieCard({ movie }) {
  const { Title, Poster, Year, imdbID } = movie;

  return (
    <li className="bg-slate-800 rounded-lg hover:shadow-[0px_0px_25px_rgb(255,255,255)] cursor-pointer">
      <Link to={`/movies/${imdbID}`}>
        <div className="h-96">
          <img
            src={Poster}
            alt={Title}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="p-2">
          <p className="text-2xl text-[#D2AF84]">{Title}</p>
          <p>Year: {Year}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieCard;
