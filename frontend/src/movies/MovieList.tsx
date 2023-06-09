import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import '../App.css';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    //useEffect implementation to reduce API calls
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie'); //API url is hardcoded, requires running the backend project as well
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovies();
  }, []);

  return (
    //"margined" class below is custom css class from App.css that just adds a small margin on the left side, so things aren't right up against the edge of the page
    <>
      <div className="margined">
        <h2>Movie List</h2>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr>
              <td>{m.movieID}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.category}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
