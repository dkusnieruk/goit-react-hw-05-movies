import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findReview } from 'components/Api/api';
import css from '../Post/review.module.css';


const Reviews = () => {
  const { moviesId } = useParams();
  const [movieReview, setmovieReview] = useState(``);

  useEffect(() => {
    findReview(moviesId).then(data =>{
      setmovieReview(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <ul className={css.list}>
      {movieReview.length > 0 &&
         movieReview.map(review => {
            return (
              <li key={review.id}>
                <div>
                  <p className={css.author}>Author : {review.author}</p>
                  <p className={css.review}>Review : {review.content}</p>
                </div>
              </li>
            );
          })
}
    </ul>
  );
};

export default Reviews;
