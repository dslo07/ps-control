interface MesProps{
    params:{
        mes: string
    }
}

export const Ahorro = (props : MesProps) =>{
    const { mes } = props.params
    console.log(mes)
    return(
        <h1>Administracion de ahorros</h1>
    )
}
export default Ahorro