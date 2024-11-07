//Class components

import logo from "../assets/logo512.png"

export default function Cabecalho(){
    return (
        <header style={{
            display: "flex",
            justifyContent:"space-between",
            padding : 17,
            backgroundColor:"black",
            color:"white"
            }}>
            <img src={logo} alt="" style={{
              width : 36,
              marginRight : 140

            }}/>
            <span style={{fontSize:26}}>Nome do site</span>
            <nav style={{
                display: "flex",
                listStyle: "none",
                gap:12,
                alignItems: "center"
            }}>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </nav>
        </header>
    )
}