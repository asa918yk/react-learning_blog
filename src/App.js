import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [articles, setArticles] = useState([]);
  return (
    <>
      <h1>Blog</h1>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
