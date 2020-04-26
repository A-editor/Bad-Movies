import React from "react";
import $ from "jquery";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    console.log("gotGenres");
    $.ajax({
      url: "/genres",
      type: "GET",
      success: (resp) => {
        this.setState({ genres: resp.genres });
      },
    });
  }

  search() {
    this.props.onSearch();
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          <option>Select A Genre</option>
          {this.state.genres.map((e) => {
            return (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />

        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}

export default Search;
