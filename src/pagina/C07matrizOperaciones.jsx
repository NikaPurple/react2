import React, { Fragment, useState } from 'react'

const C07matrizOperaciones = () => {

    const [lista, setLista] = useState([1,2,3,4,5]);
    const [dias, setDias] = useState(["Lunes", "Martes","Miercoles", "Jueves"]);
    const uniendoArray = [...lista, ...dias];

    const [num, setNum] = useState([6]);
    const agregarNumero = () => {
        setNum(num + 1);
        setLista([...lista, num]);
    }

    const [texto, setTexto] = useState(["Viernes", "Sabado", "Domingo"]);
    const agregarTexto = () => {
        setDias([...dias, ...texto]);
    }
  return (
    <Fragment>
        <h1>Lectura de ka unión de matrices</h1>
        {
            uniendoArray.map(
                (item, index) =>
                <p key = {index} >
                    {item} - {index} 
                </p>
            )
        }<br/>

        <h1>Agregar un valor a un array</h1>
        <button onClick={agregarNumero}>Agregar NUM</button>
        {
            lista.map(
                (item, index) =>
                <p key = {index} >
                    {item} - {index} 
                </p>
            )
        }<br/>

        <h1>Agregar un texto a un array</h1>
        <button onClick={agregarTexto}>Agregar TEXT</button>
        {
            dias.map(
                (item, index) =>
                <p key = {index} >
                    {item} - {index} 
                </p>
            )
        }<br/>


    </Fragment>
  )
}

export default C07matrizOperaciones;
