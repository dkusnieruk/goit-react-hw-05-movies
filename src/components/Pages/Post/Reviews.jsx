import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from '../Post/review.module.css';
const API_KEY = '209b988e1e5a3c54f84bfbe290fdf3e2';

const Reviews = () => {
  const { moviesId } = useParams();
  const [movieReview, setmovieReview] = useState(``);

  const findReview = async event => {
    const url = `
        https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const data = await axios.get(url);
    const reviewMovie = await data.data.results;
    setmovieReview(await reviewMovie);
  };
  useEffect(() => {
    findReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setmovieReview]);

  console.log(movieReview);
  return (
    <ul className={css.list}>
      {movieReview.length > 0
        ? movieReview.map(review => {
            return (
              <li key={review.id}>
                <div>
                  <p className={css.author}>Author : {review.author}</p>
                  <p className={css.review}>Review : {review.content}</p>
                </div>
              </li>
            );
          })
        : ''}
    </ul>
  );
};

export default Reviews;
