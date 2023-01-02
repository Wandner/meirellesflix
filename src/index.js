import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => {
  return (
    <div> Página 404</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Pagina404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path='/cadastro/categoria' element={<CadastroCategoria />} />
    </Routes>
  </BrowserRouter>
);

