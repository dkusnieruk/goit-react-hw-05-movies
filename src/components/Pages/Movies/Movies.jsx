import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from '../Movies/movies.module.css';
const API_KEY = '209b988e1e5a3c54f84bfbe290fdf3e2';

const Movies = () => {
  const [findMovies, setFindMovies] = useState([]);
  const [filter, setFilter] = useState('');

  const onChange = event => {
    const { value } = event.target;

    setFilter(value);
  };
  const findMoviesData = async event => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${filter}&page=1&include_adult=false`;
    const data = await axios.get(url);
    const movieFiltered = await data.data.results;
    setFindMovies(await movieFiltered);
  };
  useEffect(() => {
    findMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <form onSubmit={findMoviesData} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          name="filter"
          autoFocus
          placeholder="Type movie title"
          value={filter}
          onChange={onChange}
        ></input>
        <button>Search</button>
      </form>
      <ol>
        {findMovies.length <= 0 ? (
          <p></p>
        ) : (
          findMovies.map(singleTitle => {
            return (
              <li id={singleTitle.id} key={singleTitle.id} className={css.link}>
                <Link to={''} className={css.main}>
                  {' '}
                  {singleTitle.title}
                </Link>
              </li>
            );
          })
        )}
      </ol>
    </>
  );
};

export default Movies;
