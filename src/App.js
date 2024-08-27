import logo from './logo.svg';
import { Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Blog</h1>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
