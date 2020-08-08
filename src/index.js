import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';

import CadastroVideo from './Pages/Cadastro/Video'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroCategoria from './Pages/Cadastro/Categoria';

const pagina404 = () => (<div>Ops! Página não encontrada</div>)

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={pagina404} />
      </Switch>
      
    </BrowserRouter>,
  document.getElementById('root')
  );
