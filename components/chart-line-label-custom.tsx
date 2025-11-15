"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with a custom label"

// DATOS DEL GRÁFICO: Array con los valores para cada día
const chartData = [
  { dia: "Lunes", total: 8500 },
  { dia: "Martes", total: 16200 },
  { dia: "Miércoles", total: 2300 },
  { dia: "Jueves", total: 0 },
  { dia: "Viernes", total: 55800 },
  { dia: "Sábado", total: 15000 },
  { dia: "Domingo", total: 0 },
]

// CONFIGURACIÓN DEL GRÁFICO: Define estilos y etiquetas
const chartConfig = {
  total: {
    label: "Gasto Total",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartLineLabelCustom() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gastos Realizados durante la semana</CardTitle>
        <CardDescription>Semana del 10 al 16 de Noviembre 2024</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            {/* Líneas de la cuadrícula */}
            <CartesianGrid vertical={false} />
            
            {/* Eje X con los días */}
            <XAxis
              dataKey="dia"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            
            {/* Tooltip que aparece al hacer hover */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            
            {/* Línea principal del gráfico */}
            <Line
              dataKey="total"
              type="monotone"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{
                fill: "#082f49",
              }}
              activeDot={{
                r: 6,
              }}
            >
              {/* Etiquetas sobre cada punto mostrando el valor */}
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Mayor gasto el Viernes <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total de la semana: $97,800
        </div>
      </CardFooter>
    </Card>
  )
}