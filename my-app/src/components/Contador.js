import {useState } from "react";
import Botao from "./Botao";

export default function Contador(){
    const [contagem, setContagem] = useState(0);
    const contar = ()=>{
        setContagem(contagem + 1)
        console.log(contagem);
    }
    return(
        <>
            <h1>
                {contagem}
            </h1>
            <Botao handleClick={contar} bg="#61DAFB">Clique aqui</Botao>
        </>
    )
}