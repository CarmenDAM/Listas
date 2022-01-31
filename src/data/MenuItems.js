import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';
import Moviles from '../components/Moviles';
import PelisMarvel from '../components/PelisMarvel';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/moviles',
    title: 'Moviles',
    component: Moviles,
  },
  {
    id: 5,
    path: '/marvel',
    title: 'Marvel',
    component: PelisMarvel,
  },
];

/*
  path
  id
  title
  component
*/