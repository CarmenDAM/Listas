import React from 'react';
import Perfil from './Perfil';
import ComponentePerfilUsuario from './ComponentePerfilUsuario';

export default function Perfil() {
  return (
    <div className="main-site">
      <h1>Página de perfil</h1>

     
      <ComponentePerfilUsuario
        user="Usuario: "
        nombre="Nombre: "
        apellidos="Apellidos: "
        direccion="Dirección: "
        email="Email: "
        elementos={elementos1}
      />   

    </div>
  );
}