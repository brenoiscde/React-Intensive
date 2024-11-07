export default function ListaFrutas(){
    const listafrutas = [
        { id: 1, nome: "maçã" },
        { id: 2, nome: "banana" },
        { id: 3, nome: "laranja" },
        { id: 4, nome: "manga" },
        { id: 5, nome: "uva" }
      ];

      return (
        <>
        <ul>
            {listafrutas.map(fruta => (
                <li key={fruta.id}>{fruta.nome}</li>
            ))}
        </ul>
        </>
      )
}