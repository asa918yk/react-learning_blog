import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [articles, setArticles] = useState([]);
  return (
    <>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link to="/">トップ</Link>
        </li>
        <li>
          <Link to="/post">記事を作成</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
