import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import css from '../Post/singlePost.module.css';

const API_KEY = '209b988e1e5a3c54f84bfbe290fdf3e2';

const SinglePost = () => {
  const { moviesId } = useParams();
  const [singleMovie, setSingleMovie] = useState(``);

  const findDetails = async event => {
    const url = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=${API_KEY}&language=en-US`;
    const data = await axios.get(url);
    const singleMovie = await data.data;
    setSingleMovie(await singleMovie);
  };
  useEffect(() => {
    findDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSingleMovie]);
  console.log(singleMovie);
  return (
    <>
      {singleMovie !== '' ? (
        <>
          <Link className={css.back} to="/goit-react-hw-05-movies/">
            Go Back
          </Link>
          <div className={css.movie}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
              alt={singleMovie.title}
            ></img>
            <div>
              <h1 className={css.title}>{singleMovie.title}</h1>
              <h2 className={css.score}>
                User score: {((singleMovie.vote_average / 10) * 100).toFixed(2)}{' '}
                %{' '}
              </h2>
              <div>
                <h2 className={css.subTitle}>Overview:</h2>
                <p className={css.content}>{singleMovie.overview}</p>
              </div>
              <div>
                <h2 className={css.subTitle}>Genres:</h2>
                <div className={css.genresList}>
                  {singleMovie.genres.map(element => {
                    return (
                      <p className={css.contentGenre} key={element.id}>
                        {element.name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className={css.subTitle}>Additional Information:</h2>
                <Link className={css.contentGenre} to={`cast`}>
                  Cast
                </Link>
                <Link
                  className={css.contentGenre}
                  to={`/goit-react-hw-05-movies/movies/${moviesId}/reviews`}
                >
                  Reviews
                </Link>
              </div>
              <section>
                <Outlet />
              </section>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default SinglePost;
