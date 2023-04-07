import data from './MovieData.json';
import React from 'react';
import './App.css';

const MovieData = data.MovieData;

function MovieList() {
  return (
    <div>
      <div className="margined">
        <h2>Movie List</h2>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {MovieData.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
