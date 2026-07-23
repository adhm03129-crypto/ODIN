"use client";

import React from "react";
import { BarChart3, TrendingUp, Users, PieChart as PieIcon } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { HERO_META_TIER_DATA, STATE_POWER_GROWTH_DATA, TROOP_CLASS_DISTRIBUTION } from "@/data/analyticsData";

export default function AnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-blue-400" /> State Meta & Power Analytics
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Historical state power growth benchmarks, hero generation stat scaling, and troop class usage ratios.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* State Power Growth Area Chart */}
        <div className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-odin-text-main flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" /> State Total Rallies Growth
            </h2>
            <span className="text-[10px] font-mono text-odin-text-muted">Day 1 to 360</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={STATE_POWER_GROWTH_DATA}>
                <defs>
                  <linearGradient id="rallyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#374151", fontSize: "12px" }} />
                <Area type="monotone" dataKey="totalStateRallies" stroke="#3B82F6" fill="url(#rallyGradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hero Power Scaling Bar Chart */}
        <div className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-odin-text-main flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" /> Hero Average Power by Generation
            </h2>
            <span className="text-[10px] font-mono text-odin-text-muted">Gen 1 to Gen 6</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HERO_META_TIER_DATA}>
                <XAxis dataKey="generation" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#374151", fontSize: "12px" }} />
                <Bar dataKey="averagePower" fill="#06B6D4" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Troop Class Distribution Pie Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <h2 className="text-sm font-bold text-odin-text-main flex items-center gap-2">
            <PieIcon className="w-4 h-4 text-emerald-400" /> State Troop Class Distribution Meta
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
            <div className="h-56 w-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={TROOP_CLASS_DISTRIBUTION} dataKey="percentage" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80}>
                    {TROOP_CLASS_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#111827", borderColor: "#374151", fontSize: "12px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {TROOP_CLASS_DISTRIBUTION.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-odin-sidebar/60 border border-odin-border/40 min-w-[200px]">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="font-bold text-odin-text-main">{item.name}</span>
                  <span className="ml-auto font-bold" style={{ color: item.color }}>{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
