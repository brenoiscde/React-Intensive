export default function Botao({handleClick,children,bg,color}){
    return (
        <button onClick={handleClick}
            style={{
            backgroundColor:bg,
            color:color,
            padding:"12px 24px",
            borderRadius:12,
            border:"none"
            }}>
            {children}
        </button>
    )
}