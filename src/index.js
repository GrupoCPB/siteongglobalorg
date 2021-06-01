import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CadastroOng from './pages/CadastroOng';
import CadastroVaga from './pages/CadastroVaga';
import CadastroVoluntario from './pages/Cadastro/Voluntario/index';
import PerfilOng from './pages/PerfilOng';
import PerfilVoluntario from './pages/PerfilVoluntario';
import LoginOng from './pages/LoginOng';
import LoginVoluntario from './pages/LoginVoluntario';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/ong" component={CadastroOng} exact />
        <Route path="/cadastro/voluntario" component={CadastroVoluntario} exact />
        <Route path="/cadastro/vaga" component={CadastroVaga} exact />
        <Route path="/login/ong" component={LoginOng} exact />
        <Route path="/login/voluntario" component={LoginVoluntario} exact />
        <Route path="/perfil/ong" component={PerfilOng} exact />
        <Route path="/perfil/voluntario" component={PerfilVoluntario} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);