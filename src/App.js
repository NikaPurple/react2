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
      <C01componente />
      Hola mundo desde react...
      <h1>Componente</h1>
      <C02contador/>
      <h1>Componente</h1>
      <C03dobleestado/>
      <h1>Componente</h1>
      <C04variable/>
      <h1>Componente</h1>
      <C05operador/>
      <h1>Componente</h1>
      <C06matriz/>
      <h1>Componente</h1>
      <C07matrizOperaciones/>
    </div>
  );
}

export default App;
