import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { findDetails } from 'components/Api/api';
import css from '../Post/singleMovie.module.css';

const SingleMovies = () => {
  const { moviesId } = useParams();
  const [singleMovie, setSingleMovie] = useState(``);
  const location = useLocation();

  useEffect(() => {
    findDetails(moviesId).then(data => {
      setSingleMovie(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSingleMovie]);

  return (
    <>
      {singleMovie !== '' ? (
        <>
          <Link
            className={css.back}
            to={
              location.state ? location.state.from : `/goit-react-hw-05-movies/`
            }
          >
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
                <Link className={css.contentGenre} to={`reviews`}>
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

export default SingleMovies;
