import React, { Fragment, useState } from 'react'

const C03dobleestado = () =>{
    const[valor, setValor] = useState(0);
    const[num, setNum] = useState(0);

    const IncrementoDos = () =>{
        setNum(num+1);
        console.log("Contador mensaje");
    }
    return (
        <div>
            <Fragment>
                <button onClick={()=>setValor(valor+1)}>Contador1</button>
                <span>Incremento de contador 1: {valor} </span>
                <hr/>
                <button onClick={IncrementoDos}>Contador2</button>
                <span>Incremento de contador 2: {num} </span>
            </Fragment>
        </div>
    )
}

export default C03dobleestado