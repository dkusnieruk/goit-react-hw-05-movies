import { Route, Routes } from 'react-router-dom';
import Template from './Pages/Template';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import SinglePost from './Pages/Post/SinglePost';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="/goit-react-hw-05-movies/movies/:moviesId" element={<SinglePost />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
