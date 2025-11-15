import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const resumen = [

  {
    titulo: "Gastos Totales",
    totalGastos: 12,
    cambioMensual: -5.4,
  },
  {
    titulo: "Gastos Pagados",
    totalGastos: 8,
    cambioMensual: -5.4,
  },
  {
    titulo: "Resumen de Gastos",
    totalGastos: "$845.980",
    cambioMensual: +5.4,
  },
  {
    titulo: "Dinero Ahorrado",
    totalGastos: "$529.650",
    cambioMensual: +5.4,
  },
]





export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {
        resumen.map( carta => (
          <Card key={carta.titulo} className="@container/card">
            <CardHeader>
              <CardDescription>{carta.titulo}</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {carta.totalGastos}
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {carta.cambioMensual < 0 ? (
                  <>
                    Has bajado este mes<IconTrendingDown className="size-4" />
                  </>
                ) : (
                  <>
                    Has aumentado  este mes <IconTrendingUp className="size-4" />
                  </>
                )}
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        ) )

      }
  


    </div>
  )
}
