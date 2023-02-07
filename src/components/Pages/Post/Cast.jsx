import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findCast } from 'components/Api/api';
import css from '../Post/cast.module.css';

const Cast = () => {
  const { moviesId } = useParams();
  const [movieCast, setmovieCast] = useState(``);

  useEffect(() => {
    findCast(moviesId).then(data =>{
      setmovieCast(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={css.list}>
      {movieCast.length > 0 &&
         movieCast.map(person => {
            return (
              <li key={person.id}>
                <div>
                  <img
                    className={css.image}
                    src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                    alt={person.name}
                  ></img>

                  <div>
                    <p>Actor : {person.name}</p>
                    <p>Character : {person.character}</p>
                  </div>
                </div>
              </li>
            );
          })
        }
    </ul>
  );
};

export default Cast;
