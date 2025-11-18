import Image from "next/image";
import lgo from "../public/logo.png"
import chip from "../public/chip.png"
import "@/app/tarjertaStyle.css";

interface  datosTarjeta {
        id: number,
        banco: string,
        titular : string,
        tipo : string
}


function Tarjeta({datos} : {datos: datosTarjeta}) {
    return (
        <div className="tarjeta-container">
            <header className="tarjeta-header">
                <span className="tarjeta-logo">
                    <Image src={lgo} width={48} height={48} alt="logo" />
                    <h5>{datos.banco}</h5>
                </span>

                <Image
                    src={chip}
                    width={40}
                    height={20}
                    alt="chip"
                    className="tarjeta-chip"
                />
            </header>

            <div className="tarjeta-card-details">
                <div>
                    <h6>Titular de la cuenta:</h6>
                    <h5 className="tarjeta-number">{datos.titular}</h5>
                </div>
                <div className="tarjeta-valid-date">
                    <h6>Tipo:</h6>
                    <h5>{datos.tipo}</h5>
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;
