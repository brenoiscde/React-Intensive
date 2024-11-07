import Cabecalho from "./Header";
import "../global.css"
import Contador from "./Contador";
import ListaFrutas from "./ListaFrutas";

export default function App() {
  return (
    <>
      <Cabecalho/>
      <main>
      <Contador/>
      <ListaFrutas/>
      </main>
    </>
  );
}

