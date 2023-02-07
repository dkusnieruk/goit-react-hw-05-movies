import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import css from '../Post/cast.module.css'
const API_KEY = '209b988e1e5a3c54f84bfbe290fdf3e2';
const Cast = () =>{
    const {moviesId} = useParams()
    const [movieCast, setmovieCast] = useState(``);
   
   
    const findCast = async event => {
        const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
        const data = await axios.get(url);
        const castMovie = await data.data.cast;
        setmovieCast(await castMovie);
        
        
      };
      useEffect(()=>{
        findCast()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[setmovieCast])
      console.log(movieCast);
    return (
  <ul className={css.list}>
  {(movieCast.length>0) ?
  movieCast.map((person) =>{
    return(
       <li key={person.id}>
        <div>
        <img className={css.image} src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} alt={person.name}></img>
     
            <div>
                <p>Actor : {person.name}</p>
                <p>Character : {person.character}</p>
            </div>
        </div>
       </li>   )
  }) 
  :''}
  </ul>
        )
}

export default Cast