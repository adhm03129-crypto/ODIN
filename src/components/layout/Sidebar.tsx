"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Building2,
  BookOpen,
  Swords,
  Cat,
  Calendar,
  Shield,
  Landmark,
  Coins,
  Package,
  FileText,
  Bot,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useGameStore } from "@/stores/useGameStore";
import { GAMES_DATABASE } from "@/data/games";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Heroes", href: "/heroes", icon: Users, badge: "28" },
  { name: "Buildings", href: "/buildings", icon: Building2 },
  { name: "Research", href: "/research", icon: BookOpen },
  { name: "Troops", href: "/troops", icon: Swords },
  { name: "Pets", href: "/pets", icon: Cat },
  { name: "Events", href: "/events", icon: Calendar, badge: "LIVE", badgeColor: "bg-emerald-500/20 text-emerald-400" },
  { name: "Alliance", href: "/alliance", icon: Shield },
  { name: "State", href: "/state", icon: Landmark },
  { name: "Resources", href: "/resources", icon: Coins },
  { name: "Items", href: "/items", icon: Package },
  { name: "Knowledge Base", href: "/knowledge", icon: FileText },
  { name: "AI Assistant", href: "/assistant", icon: Bot, badge: "AI", badgeColor: "bg-cyan-500/20 text-cyan-400" },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const { activeGameId } = useGameStore();

  const activeGame = GAMES_DATABASE.find((g) => g.id === activeGameId) || GAMES_DATABASE[0];

  return (
    <aside
      className={cn(
        "relative flex flex-col h-screen bg-odin-sidebar border-r border-odin-border/60 transition-all duration-300 z-30 select-none",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-odin-border/50">
        <Link href="/" className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black text-xl shadow-odin-glow">
            O
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-odin-text-main text-lg tracking-wider flex items-center gap-1.5">
                ODIN <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono">SaaS</span>
              </span>
              <span className="text-[11px] text-odin-text-muted truncate max-w-[140px]">
                {activeGame.shortName} Platform
              </span>
            </div>
          )}
        </Link>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg text-odin-text-muted hover:text-odin-text-main hover:bg-odin-card transition-colors"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Active Game Selector Banner */}
      {!collapsed && (
        <div className="mx-3 my-3 p-2.5 rounded-xl bg-odin-card/60 border border-odin-border/40 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xl">{activeGame.icon}</span>
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-semibold text-odin-text-main truncate">
                {activeGame.name}
              </span>
              <span className="text-[10px] text-odin-text-muted font-mono">
                Gen 1-{activeGame.supportedGenerations} Active
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 scrollbar-thin scrollbar-thumb-odin-border">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                isActive
                  ? "bg-odin-primary/15 text-odin-primary border border-odin-primary/30 shadow-sm"
                  : "text-odin-text-muted hover:text-odin-text-main hover:bg-odin-card/80"
              )}
              title={collapsed ? item.name : undefined}
            >
              <div className="flex items-center gap-3">
                <Icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive ? "text-odin-primary" : "text-odin-text-muted")} />
                {!collapsed && <span>{item.name}</span>}
              </div>

              {!collapsed && item.badge && (
                <span
                  className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full font-mono",
                    item.badgeColor || "bg-odin-card text-odin-text-muted border border-odin-border/40"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer Profile Status */}
      <div className="p-3 border-t border-odin-border/50 bg-odin-sidebar">
        {!collapsed ? (
          <div className="flex items-center justify-between p-2 rounded-xl bg-odin-card/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-xs text-blue-400">
                S420
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-odin-text-main">Chief Strategist</span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-bold text-xs text-blue-400">
              S420
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
