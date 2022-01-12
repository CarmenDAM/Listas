import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';

export function App() {
  return (
    <Router>
{
/**
   * function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}
   */
}
 

      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/listas" component={PaginaListas} />
      <Route path="/perfil" component={Perfil} />
    </Router>
  );
}