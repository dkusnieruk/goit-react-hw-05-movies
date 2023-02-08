import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Template = lazy(() => import('./Template'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const SingleMovie = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(import('./Pages/Post/SingleMovie'));
    }, 1500);
  });
});
const Cast = lazy(() => import('./Pages/Post/Cast'));
const Reviews = lazy(() => import('./Pages/Post/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Is loading ...</div>}>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/goit-react-hw-05-movies/" element={<Home />} />
            <Route
              path="/goit-react-hw-05-movies/movies"
              element={<Movies />}
            />
            <Route
              path="/goit-react-hw-05-movies/movies/:moviesId"
              element={<SingleMovie />}
            >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
