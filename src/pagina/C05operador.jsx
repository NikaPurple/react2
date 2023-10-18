import React, { Fragment } from 'react'

const C05operador = () => {
    const edad=18;
    return (
        <Fragment>
                <h1>Operador ternario</h1>
                {edad >=18? 'Mayor de edad':'Menor de edad'}
        </Fragment>
    )
}

export default C05operador;
