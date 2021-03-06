import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  //   render() {
  //     console.log("in movies:", this.props.movies);
  //     if (this.props.movies.length === 0) {
  //       return (
  //         <div>
  //           <h2>Choose A Category</h2>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <ul className="movies">
  //           {this.props.movies.map((movie) => (
  //             <li
  //               key={movie.id}
  //               onClick={(event) => this.props.handleMovieClick(event.target)}
  //               className="movie_item"
  //             >
  //               <img
  //                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  //               />
  //               <div className="movie_description">
  //                 <h2>{movie.title}</h2>
  //                 <section className="movie_details">
  //                   <div className="movie_year">
  //                     <span className="title">Year</span>
  //                     <span>{movie.release_date.slice(0, 4)}</span>
  //                   </div>
  //                   <div className="movie_rating">
  //                     <span className="title">Rating</span>
  //                     <span>{movie.vote_average}</span>
  //                   </div>
  //                 </section>
  //               </div>
  //             </li>
  //           ))}
  //         </ul>
  //       );
  //     }

  //   }
  // }
  render() {
    let { movies, handleMovieClick } = this.props;

    let movieList = movies.map((movie, idx) => {
      return (
        <li
          key={idx}
          className="movie_item"
          onClick={() => handleMovieClick(movie)}
        >
          <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
          <div className="movie_description">
            <h2>{movie.title}</h2>
            <section className="movie_details">
              <div className="movie_year">
                <span className="title">Vote Count: </span>
                <span>{movie.vote_count}</span>
              </div>
              <div className="movie_rating">
                <span className="title">Rating: </span>
                <span>{movie.vote_average}</span>
              </div>
            </section>
          </div>
        </li>
      );
    });

    return <ul className="movies">{movieList}</ul>;
  }
}

export default Movies;
