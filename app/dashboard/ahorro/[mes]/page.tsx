interface MesProps {
  params: {
    mes: string;
  };
}

export default function Mes({ params: { mes } }: MesProps) {
  console.log(mes);

  return <h1>Administración de ahorros: {mes}</h1>;
}
