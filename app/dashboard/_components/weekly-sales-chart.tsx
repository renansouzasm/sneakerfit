"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Set 03", vendas: 250, pedidos: 200 },
  { name: "Set 05", vendas: 200, pedidos: 180 },
  { name: "Set 07", vendas: 150, pedidos: 120 },
  { name: "Set 09", vendas: 180, pedidos: 150 },
  { name: "Set 11", vendas: 220, pedidos: 190 },
  { name: "Set 13", vendas: 900, pedidos: 850 },
];

export function WeeklySalesChart() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">
        Vendas Semanais
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="#888" fontSize={12} />
          <YAxis
            stroke="#888"
            fontSize={12}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            formatter={(value) => (
              <span className="text-sm capitalize">{value}</span>
            )}
          />
          <Line
            type="monotone"
            dataKey="vendas"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: "#10b981", r: 4 }}
            name="Vendas"
          />
          <Line
            type="monotone"
            dataKey="pedidos"
            stroke="#6b7280"
            strokeWidth={2}
            dot={{ fill: "#6b7280", r: 4 }}
            name="Pedidos"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
