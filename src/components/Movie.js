import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";


function Movie({ id, year, title, summary, poster, /*popularity, vote_average,*/ genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            /*
            popularity,
            vote_average,
            */
            genres
          }
        }}
      >
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>

          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}
/*
<ul className="movie__genres">
{genres.map((genre, index) => (
  <li key={index} className="genres__genre">
    {genre}
  </li>
))}
</ul>
*/
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  
  poster: PropTypes.string.isRequired,
  /*
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
  */
};

export default Movie;
