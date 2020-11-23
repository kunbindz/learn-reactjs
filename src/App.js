import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album/pages';
import TodoFeature from './features/Todo/pages';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <div className="App">
      <Header />
      <hr />
      <p>
        <NavLink to="/todos">todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">albums</NavLink>
      </p>

      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
