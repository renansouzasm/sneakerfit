"use client";

import { Card } from "@/components/ui/card";
import { RefreshCw, Layers, Calendar, CalendarRange } from "lucide-react";
import { WeeklySalesChart } from "./weekly-sales-chart";
import { BestSellingChart } from "./best-selling-chart";
import { formatCurrencyBrl } from "@/utils/formatCurrencyBrl";

const metricCards = [
  {
    title: "Pedidos Hoje",
    value: 89740,
    icon: Layers,
    bgColor: "bg-teal-500",
    textColor: "text-teal-500",
  },
  {
    title: "Pedidos Ontem",
    value: 67993,
    icon: Layers,
    bgColor: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    title: "Este Mês",
    value: 1314696,
    icon: RefreshCw,
    bgColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    title: "Mês Passado",
    value: 3196492,
    icon: Calendar,
    bgColor: "bg-cyan-600",
    textColor: "text-cyan-600",
  },
  {
    title: "Vendas Totais",
    value: 62651305,
    icon: CalendarRange,
    bgColor: "bg-green-600",
    textColor: "text-green-600",
  },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">
        Visão Geral do Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {metricCards.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card
              key={index}
              className={`${metric.bgColor} border-0 p-6 flex flex-col items-center justify-center text-white`}
            >
              <Icon className="w-8 h-8 mb-3" />
              <p className="text-sm opacity-90 mb-1">{metric.title}</p>
              <p className="text-2xl font-bold">
                {formatCurrencyBrl(metric.value)}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklySalesChart />
        <BestSellingChart />
      </div>
    </div>
  );
}
