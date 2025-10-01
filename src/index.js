
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Layout } from './layout/Layout';
import './reset.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path='/product/:id'
          element={<Product />}

        />
      </Route>
    </Routes>
  </BrowserRouter>
);
