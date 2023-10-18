import React from 'react'
import "./C03compCss.css"
import style from './C03compCssObj.js'

const C03compCss = () => {
  return (
    <div className="marcoComponente">
        <h4>Componente 3. Con formas de definir estilos</h4>

        <button style={{backgroundColor: "green', color:'blue', padding:3px"}}> Botón 1 con estilos en linea de atributos (Definido como objeto)</button>
        <hr/>
        
        <button> Botón 2 con estilos en archivo css (normal)</button>
        <br/>
        
        <button style={style.estilol}>
            Botón 3 con estilos en archivo js (Definido como objeto)</button>
    </div>
  )
}

export default C03compCss
