import { useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import css from '../Movies/movies.module.css';
import { findMoviesData } from 'components/Api/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // eslint-disable-next-line
  const query = searchParams.get('query');
  console.log(query);
  const onChange = event => {
    const { value } = event.target;
    setFilter(value);
    setSearchParams({ query: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    findMoviesData(filter).then(data => {
      setMovies(data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Type movie title"
          value={filter}
          onChange={onChange}
        ></input>
        <button>Search</button>
      </form>
      <ol>
        {movies.length > 0 &&
          movies.map(singleTitle => {
            return (
              <li id={singleTitle.id} key={singleTitle.id} className={css.link}>
                <Link
                  to={`/goit-react-hw-05-movies/movies/${singleTitle.id}`}
                  className={css.main}
                  state={{ from: location }}
                >
                  {singleTitle.title}
                </Link>
              </li>
            );
          })}
      </ol>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Movies;
