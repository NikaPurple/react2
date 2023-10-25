import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

const AppForm = () => {

  /////// GUARDAR Y ACTUALIZAR ///////
  const campoRegistro = {nombre:"",edad:"",genero:""};
  const [objeto, setObjeto] = useState(campoRegistro);
  
  const handleSubmit = (e) => { //manejador del submit
  e.preventDefault();
  
  try {
    if (db) {
      addDoc(collection(db, 'persona'), objeto)
      console.log("se guardo con exito");
    }
  } catch (error) {
    console.error();
  }
}

  return (
    <div style={{padding:"10px", background:"orange", textAlign:"center"}}>
      <form onSubmit={handleSubmit}>
        <h1>AppForm.js</h1>
        <input type='text' placeholder='Nombre...'/>
        <input type='text' placeholder='Nombre...'/>
        <select>
          <option value="">Seleccione genero...</option>
          <option value="F">Femenino</option>
          <option value="M">Masculino</option>
        </select>
        <button>Guardar/Actualizar</button>
      </form>
    </div>
  )
}

export default AppForm
