const request = require("request");
const axios = require("axios");
const { API_KEY } = require("../../config.js");

// write out logic/functions required to query TheMovieDB.org

const getMoviesByGenre = (genre, callback) => {
  const options = {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genre}`,
  };
  request(options, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      const parsed = JSON.parse(body);
      callback(null, parsed);
    }
  });
};

const getGenres = (object, callback) => {
  const options = {
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  };
  request(options, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      const parsed = JSON.parse(body);
      callback(null, parsed);
    }
  });
};

module.exports.getMoviesByGenre = getMoviesByGenre;
module.exports.getGenres = getGenres;
// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file
