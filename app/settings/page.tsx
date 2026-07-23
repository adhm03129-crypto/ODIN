"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Settings, Moon, Sun, Globe, Bell, Key, Code, User, Copy, Check, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("English (US)");
  const [apiKey, setApiKey] = useState("odin_live_sk_9f82a10b42c38d4e");
  const [copiedKey, setCopiedKey] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [emailNotify, setEmailNotify] = useState(true);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    toast.success("API Key copied to clipboard");
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleGenerateNewKey = () => {
    const newKey = `odin_live_sk_${Math.random().toString(36).substring(2, 18)}`;
    setApiKey(newKey);
    toast.success("Generated new production API Key");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-odin-text-main flex items-center gap-2">
          <Settings className="w-7 h-7 text-odin-primary" /> Platform Settings & Workspace Config
        </h1>
        <p className="text-xs text-odin-text-muted mt-1">
          Customize theme preferences, language, notification rules, API keys, and developer mode.
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Theme & Appearance */}
        <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <h2 className="text-sm font-bold text-odin-text-main uppercase font-mono tracking-wider flex items-center gap-2">
            <Moon className="w-4 h-4 text-blue-400" /> Appearance Theme
          </h2>

          <div className="grid grid-cols-3 gap-3 text-xs font-mono">
            <button
              onClick={() => setTheme("dark")}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                theme === "dark"
                  ? "bg-blue-600/20 border-blue-500/50 text-blue-400 font-bold"
                  : "bg-odin-sidebar border-odin-border/40 text-odin-text-muted"
              }`}
            >
              <Moon className="w-4 h-4" /> Dark Mode
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                theme === "light"
                  ? "bg-blue-600/20 border-blue-500/50 text-blue-400 font-bold"
                  : "bg-odin-sidebar border-odin-border/40 text-odin-text-muted"
              }`}
            >
              <Sun className="w-4 h-4" /> Light Mode
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                theme === "system"
                  ? "bg-blue-600/20 border-blue-500/50 text-blue-400 font-bold"
                  : "bg-odin-sidebar border-odin-border/40 text-odin-text-muted"
              }`}
            >
              <Globe className="w-4 h-4" /> System Default
            </button>
          </div>
        </section>

        {/* 2. Language Preferences */}
        <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <h2 className="text-sm font-bold text-odin-text-main uppercase font-mono tracking-wider flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" /> Language & Regional Localization
          </h2>

          <div className="max-w-xs space-y-2">
            <label className="text-xs text-odin-text-muted font-mono">Display Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-odin-sidebar border border-odin-border text-xs text-odin-text-main outline-none focus:border-cyan-500"
            >
              <option value="English (US)">English (US)</option>
              <option value="German (DE)">German (Deutsch)</option>
              <option value="French (FR)">French (Français)</option>
              <option value="Korean (KR)">Korean (한국어)</option>
              <option value="Chinese (CN)">Chinese (简体中文)</option>
            </select>
          </div>
        </section>

        {/* 3. API Keys Management */}
        <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <h2 className="text-sm font-bold text-odin-text-main uppercase font-mono tracking-wider flex items-center gap-2">
            <Key className="w-4 h-4 text-amber-400" /> Platform API Keys
          </h2>

          <div className="space-y-3">
            <p className="text-xs text-odin-text-muted">
              Use your secret API key to query Whiteout Survival JSON endpoints programmatically.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={apiKey}
                className="flex-1 px-3 py-2.5 rounded-xl bg-odin-sidebar border border-odin-border font-mono text-xs text-odin-text-main outline-none"
              />
              <button
                onClick={handleCopyKey}
                className="px-4 py-2.5 rounded-xl bg-odin-sidebar border border-odin-border/60 hover:border-amber-400 text-xs font-semibold text-odin-text-main flex items-center gap-1.5 transition-colors"
              >
                {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                {copiedKey ? "Copied" : "Copy"}
              </button>
              <button
                onClick={handleGenerateNewKey}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                Regenerate
              </button>
            </div>
          </div>
        </section>

        {/* 4. Developer Mode Options */}
        <section className="p-6 rounded-2xl bg-odin-card border border-odin-border/60 space-y-4 shadow-odin">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-odin-text-main uppercase font-mono tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" /> Developer Mode & Raw Schemas
              </h2>
              <p className="text-xs text-odin-text-muted mt-0.5">
                Exposes raw JSON schema definitions and debug logs for game entities.
              </p>
            </div>

            <button
              onClick={() => {
                setDevMode(!devMode);
                toast.info(devMode ? "Developer Mode Disabled" : "Developer Mode Enabled");
              }}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                devMode ? "bg-purple-600" : "bg-odin-sidebar border border-odin-border"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  devMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
