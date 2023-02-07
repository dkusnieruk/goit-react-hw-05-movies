import { Route, Routes } from 'react-router-dom';
import Template from './Pages/Template';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import SinglePost from './Pages/Post';
import Cast from './Pages/Post/Cast';
import Reviews from './Pages/Post/Reviews';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="/goit-react-hw-05-movies/movies/:moviesId" element={<SinglePost />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
