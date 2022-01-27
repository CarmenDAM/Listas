import React from 'react';
import Perfil from './Perfil';
import {Usuarios} from '../data/Usuarios';


export function Perfil() {
  
  if(localStorage.getItem('user')==Usuarios[0].Nombre && localStorage.getItem('Contraseña')==Usuarios[0].Contraseña){
    
    return (
      <BootstrapTabla/>
    );
  }else{
    return(
      <div>
        <h1>Error al introducir los datos
          </h1>
      </div>    
    );
  }
  
}