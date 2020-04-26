import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // movies: [{deway: "movies"}],
      movies: [],
      favorites: [],
      showFaves: false,
    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    // you might have to do something important here!
  }

  componentDidMount() {
    this.getMovies();
    this.getFavorites();
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
    var currentVal = $("select").val();
    $.ajax({
      url: "/search",
      type: "GET",
      data: { id: currentVal },
      success: (resp) => {
        console.log(("resp:", resp));
        this.setState({ movies: resp.results });
        console.log("searched for movies:", this.state.movies);
      },
    });
  }

  handleMovieClick(movie) {
    if (this.state.showFaves) {
      this.deleteMovie(movie);
    } else {
      this.saveMovie(movie);
    }
  }

  // getFavorites() {
  //   $.ajax({
  //     url: "/favorites",
  //     type: "GET",
  //     success: (resp) => {
  //       this.setState({ favorites: resp.results });
  //     },
  //   });
  // }

  getFavorites() {
    axios
      .get("/favorites")
      .then((favorites) => this.setState({ favorites: favorites.data }))
      .catch((err) => console.log({ err }));
  }

  saveMovie(movie) {
    console.log("movie:", movie);
    // same as above but do something diff
    $.ajax({
      url: "/save",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ movie }),
    }).done(this.getFavorites());
  }
  // saveMovie(movie) {
  //   axios
  //     .post("/save", { movie })
  //     .then((result) => {
  //       // rudimentary way to let the user know their action succeeded
  //       // console.log("result:", res);
  //       console.log("movie:", movie);
  //       window.alert("movie saved successfully!");

  //       // helpful details on this syntax: https://stackoverflow.com/a/43003547
  //       this.setState({ favorites: [...this.state.favorites, movie] });
  //     })
  //     .catch((err) => {
  //       window.alert("movie already saved to your favorites");
  //     });
  // }

  deleteMovie(movie) {
    // same as above but do something diff
    console.log("movie:", movie);
    $.ajax({
      url: "/delete",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ id: movie.id }),
    }).done(this.getFavorites());
  }

  // deleteMovie(movie) {
  //   axios
  //     .post("/delete", { data: { id: movie.id } })
  //     .then(() => {
  //       // update favorites
  //       console.log("updated");
  //       this.getFavorites();
  //     })
  //     .catch((err) => {
  //       console.log("Error deleting: ", err);
  //     });
  // }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  render() {
    console.log("app renders");
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            onSearch={this.getMovies.bind(this)}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            handleMovieClick={this.handleMovieClick}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
