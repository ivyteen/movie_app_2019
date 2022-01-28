import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

import GenreInfo from "../Context";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {

    const { data: { results } } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=2e3669c1f18a6840304c7736fc043246"
    );
    const movies = results;

    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;



    return (
      
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <GenreInfo.Consumer>
              { value => {
                 return <div className="movies">
                  {movies.map(movie => (
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={parseInt(movie.release_date.split("-")[0])}
                    title={movie.original_title}
                    summary={movie.overview}
                    poster={movie.poster_path}                    
                    genres={movie.genre_ids.map((genre_id, index)=> value[genre_id])}
                    />
                  ))}
                </div>
                }

              }
            </GenreInfo.Consumer>
            
          )}
        </section>

      
    );
  }
}

export default Home;
