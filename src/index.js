import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//TAILWINDCSS + CUSTOM
import './index.css';

//JSX FILES TO ROUTE
import Home from './container/Home';
import InfoPage from './container/info';
import NewsPage from './container/NewsPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/info' element={<InfoPage />} />
      <Route path='/news' element={<NewsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

