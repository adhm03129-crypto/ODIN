"use client";

import React, { useState } from "react";
import { Search, Bot, Bell, Shield, Globe, ChevronDown, Check, Sparkles, User, Key, LogOut } from "lucide-react";
import { useSearchStore } from "@/stores/useSearchStore";
import { useGameStore } from "@/stores/useGameStore";
import { GAMES_DATABASE } from "@/data/games";
import Link from "next/link";
import { toast } from "sonner";

export function TopNav() {
  const { openPalette } = useSearchStore();
  const { activeGameId, setActiveGameId, activeStateServer } = useGameStore();

  const [gameDropdownOpen, setGameDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const activeGame = GAMES_DATABASE.find((g) => g.id === activeGameId) || GAMES_DATABASE[0];

  return (
    <header className="h-16 bg-odin-sidebar/90 backdrop-blur-md border-b border-odin-border/60 px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left: Workspace / Game Switcher */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setGameDropdownOpen(!gameDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-odin-card border border-odin-border/60 hover:border-odin-primary/50 text-odin-text-main text-sm font-medium transition-all"
          >
            <span className="text-base">{activeGame.icon}</span>
            <span className="font-semibold">{activeGame.shortName}</span>
            <span className="text-xs text-odin-text-muted hidden md:inline">({activeStateServer})</span>
            <ChevronDown className="w-3.5 h-3.5 text-odin-text-muted" />
          </button>

          {/* Game Selector Dropdown */}
          {gameDropdownOpen && (
            <div className="absolute top-11 left-0 w-64 p-2 bg-odin-card border border-odin-border rounded-xl shadow-odin z-50">
              <div className="text-[11px] font-semibold text-odin-text-muted px-2 py-1 uppercase tracking-wider">
                Select Game Workspace
              </div>
              {GAMES_DATABASE.map((game) => (
                <button
                  key={game.id}
                  onClick={() => {
                    setActiveGameId(game.id);
                    setGameDropdownOpen(false);
                    toast.success(`Switched workspace to ${game.name}`);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-medium text-left transition-colors ${
                    game.id === activeGameId
                      ? "bg-odin-primary/20 text-odin-primary font-bold"
                      : "text-odin-text-main hover:bg-odin-sidebar"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{game.icon}</span>
                    <div className="flex flex-col">
                      <span>{game.shortName}</span>
                      <span className="text-[10px] text-odin-text-muted">{game.publisher}</span>
                    </div>
                  </div>
                  {game.id === activeGameId && <Check className="w-4 h-4 text-odin-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Live Server Indicator */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Bear Hunt Event: LIVE</span>
        </div>
      </div>

      {/* Center: Search Trigger */}
      <div className="flex-1 max-w-md mx-4">
        <button
          onClick={openPalette}
          className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-odin-card/80 border border-odin-border/60 hover:border-odin-primary/50 text-odin-text-muted hover:text-odin-text-main text-xs transition-all shadow-inner"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-odin-primary" />
            <span>Search heroes, buildings, events, guides...</span>
          </div>
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-odin-sidebar border border-odin-border text-[10px] font-mono text-odin-text-muted">
            <span className="text-xs">Ctrl</span> K
          </kbd>
        </button>
      </div>

      {/* Right Action Icons */}
      <div className="flex items-center gap-3">
        {/* Quick AI Trigger */}
        <Link
          href="/assistant"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold shadow-odin-accent transition-all"
        >
          <Bot className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">Ask AI</span>
        </Link>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2 rounded-xl bg-odin-card border border-odin-border/60 hover:border-odin-primary/50 text-odin-text-muted hover:text-odin-text-main transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500"></span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 top-11 w-80 p-3 bg-odin-card border border-odin-border rounded-xl shadow-odin z-50">
              <div className="flex items-center justify-between pb-2 border-b border-odin-border/50 text-xs font-semibold text-odin-text-main">
                <span>Platform Intelligence Alerts</span>
                <span className="text-[10px] text-blue-400 font-mono">2 Unread</span>
              </div>
              <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
                <div className="p-2 rounded-lg bg-odin-sidebar/60 border border-blue-500/20 text-xs">
                  <div className="font-semibold text-blue-400">Sunfire Castle Event in 3 Days</div>
                  <div className="text-[11px] text-odin-text-muted mt-0.5">
                    Prepare city attack boosts & infirmary healing speedups.
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-odin-sidebar/60 border border-odin-border/30 text-xs">
                  <div className="font-semibold text-odin-text-main">Gen 6 Heroes Meta Published</div>
                  <div className="text-[11px] text-odin-text-muted mt-0.5">
                    Wu Ming execution mechanics guide updated.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-odin-card transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-xs text-white border border-blue-400/40">
              S420
            </div>
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-11 w-56 p-2 bg-odin-card border border-odin-border rounded-xl shadow-odin z-50">
              <div className="p-2 border-b border-odin-border/50 mb-1">
                <div className="text-xs font-bold text-odin-text-main">Chief Strategist</div>
                <div className="text-[11px] text-odin-text-muted truncate">strategist@odin-wsip.com</div>
              </div>
              <Link
                href="/settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-odin-text-main hover:bg-odin-sidebar"
              >
                <User className="w-3.5 h-3.5 text-odin-text-muted" /> Profile Settings
              </Link>
              <Link
                href="/settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-odin-text-main hover:bg-odin-sidebar"
              >
                <Key className="w-3.5 h-3.5 text-odin-text-muted" /> API Keys & Dev Mode
              </Link>
              <button
                onClick={() => {
                  setProfileOpen(false);
                  toast.info("Logged out successfully");
                }}
                className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-red-400 hover:bg-red-500/10 mt-1"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
