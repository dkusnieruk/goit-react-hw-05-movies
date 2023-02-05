import { Route, Routes } from "react-router-dom";
import Template from "./Pages/Template";
import NotFound from "./Pages/NotFound";
import Main from "./Pages/Main/Main";
import Movies from "./Pages/Movies/Movies";

export const App = () => {
  return (
    <>

  <Routes>
    <Route path="/" element={<Template/>}>
    <Route path="/react-homework-template/" element={<Main/>}/>
    <Route path="/react-homework-template/movies" element={<Movies/>}/>  
    <Route path="*/" element={<NotFound/>}/>  
    </Route> 
  </Routes>
    </>
  );
};
