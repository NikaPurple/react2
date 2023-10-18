import C01componente from "./pagina/C01componente";
import C02contador from "./pagina/C02contador";
import C03dobleestado from "./pagina/C03dobleestado";
import C04variable from "./pagina/C04variable";
import C05operador from "./pagina/C05operador";
import C06matriz from "./pagina/C06matriz";
import C07matrizOperaciones from "./pagina/C07matrizOperaciones";

function App() {
  return (
    <div>
      <h1>Practicas... React</h1>
      <C01componente />
      Hola mundo desde react...
      <i class="large material-icons">textsms</i>
      <hr/>
      <C02contador/>
      <hr/>
      <C03dobleestado/>
      <hr/>
      <C04variable/>
      <hr/>
      <C05operador/>
      <hr/>
      <C06matriz/>
      <hr/>
      <C07matrizOperaciones/>
    </div>
  );
}

export default App;
