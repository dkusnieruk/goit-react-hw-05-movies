import Nav from 'components/Nav/Nav';
import { Outlet } from 'react-router-dom';

const Template = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <hr />
        <Outlet />
      </main>
      <footer>
        <hr />
        <p>Routing Movie Project</p>
      </footer>
    </>
  );
};

export default Template;
