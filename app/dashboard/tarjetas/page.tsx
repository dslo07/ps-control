import Tarjeta from "@/components/Tarjeta";
import { ComboboxDemo } from "@/components/ui/comboBox";
const tartejas = [
    {
        id: 123,
        banco: "Banco Estado",
        titular : "Santiago Lopez",
        tipo : "Cuenta Rut"
    },
    {
        id: 1232,
        banco: "Banco BCI",
        titular : "Santiago Lopez",
        tipo : "Cuenta Credito"
    },
    {
        id: 12398,
        banco: "Banco Falabella",
        titular : "Santiago Lopez",
        tipo : "Cuenta Corriente"
    }
]


export default function Page() {

    return (
        <section className="p-5">
            <div className="pb-3">
                <label>
                    Buscar tarjeta
                </label>
                <div>
                    <ComboboxDemo/>
                </div> 
            </div>
            <div className="grid grid-cols-3  gap-4"> 
                {
                    tartejas.map(( tar) =>(
                        <Tarjeta key={tar.id} datos={tar}/>
                    ))
                }
            </div>
        </section>
    )
}
