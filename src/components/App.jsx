import { Route, Routes } from 'react-router-dom';
import Template from './Pages/Template';
import NotFound from './Pages/NotFound';
import Main from './Pages/Main/Main';
import Movies from './Pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/goit-react-hw-05-movies/" element={<Main />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="*/" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
