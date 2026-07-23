"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, Trophy, ShieldAlert, ArrowRight, CheckCircle } from "lucide-react";
import { EVENTS_DATABASE } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Calendar className="w-7 h-7 text-emerald-400" /> State & Alliance Event Calendar
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Event schedules, preparation step-by-step checklists, rewards database, and battle tactic guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVENTS_DATABASE.map((evt) => (
          <div
            key={evt.id}
            className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 hover:border-emerald-500/50 shadow-odin transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] uppercase font-bold">
                  {evt.category} • {evt.frequency}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    evt.status === "Live Now"
                      ? "bg-emerald-500/20 text-emerald-400 animate-pulse"
                      : "bg-odin-sidebar text-odin-text-muted border border-odin-border/40"
                  }`}
                >
                  {evt.status === "Live Now" ? "LIVE NOW" : `Starts in ${evt.nextOccurrenceDays} Days`}
                </span>
              </div>

              <h3 className="text-lg font-bold text-odin-text-main">{evt.name}</h3>
              <p className="text-xs text-odin-text-muted leading-relaxed">{evt.description}</p>

              {/* Recommended Preparation */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono font-bold text-odin-text-muted uppercase">Recommended Preparation:</span>
                {evt.recommendedPreparation.map((prep, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-odin-text-main">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{prep}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guide Link */}
            {evt.strategyGuideSlug && (
              <div className="pt-3 border-t border-odin-border/40">
                <Link
                  href={`/knowledge/${evt.strategyGuideSlug}`}
                  className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Read Full Event Strategy Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
