import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from '../Main/main.module.css';
const API_KEY = '209b988e1e5a3c54f84bfbe290fdf3e2';

const Main = () => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const fetchPopular = async () => {
    const data = await axios.get(url);
    const movieList = await data.data.results;
    setData(await movieList);
  };

  useEffect(() => {
    fetchPopular();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className={css.title}>Top trending movies</h1>
      <ol>
        {data.map(movie => {
          return (
            <li index={movie.id} id={movie.id} className={css.list}>
              <Link className={css.main} to={``}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Main;
