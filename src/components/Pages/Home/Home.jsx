import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../Home/home.module.css';
import { fetchPopular } from '../../Api/api';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchPopular().then(data => {
      setData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className={css.title}>Top trending movies</h1>
      <ol>
        {data.map(movie => {
          return (
            <li index={movie.id} id={movie.id} className={css.list}>
              <Link
                className={css.main}
                to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Home;
