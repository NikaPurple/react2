import React, { Fragment, useState } from 'react'

const C02contador = () => {
    const[numero, setNumero] = useState(0);
    const aumentar = () =>{
        console.log("Hacer click");
        setNumero(numero+1);
    }
    return (
        <div>
        <Fragment>
            <h3>MI PRIMER COMPONETE {numero} </h3>
            <button onClick={aumentar}>Click para aumentar...</button>
        </Fragment>
        </div>
    )
}

export default C02contador;
