//Select one db to work with:

//For SQL
const connection = require("../../db/sql");
//For Mongo
const mongoDb = require("../../db/mongodb");

const getAllFavorites = function (callback) {
  const myQuery = `Select * FROM favorites;`;
  connection.query(myQuery, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const saveFavorite = function (movie, callback) {
  let {
    id,
    title,
    vote_average,
    vote_count,
    poster_path,
    backdrop_path,
    release_date,
  } = movie;
  let queryString = `INSERT INTO favorites (id, title, vote_average, vote_count, poster_path, backdrop_path, release_date) VALUES (${id}, '${title}', ${vote_average}, ${vote_count}, '${poster_path}', '${backdrop_path}', '${release_date}');`;

  connection.query(queryString, (err, success) => {
    if (err) {
      callback(err, null);
    } else {
      console.log("querysucess:", success);
      callback(null, success);
    }
  });
};

const deleteFavorite = function (movieID, callback) {
  const queryString = `DELETE FROM favorites WHERE id = '${movieID}'`;
  connection.query(queryString, (err, success) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, success);
    }
  });
};

module.exports = { getAllFavorites, saveFavorite, deleteFavorite };
