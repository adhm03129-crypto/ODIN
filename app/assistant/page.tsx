"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Bot,
  Send,
  Trash2,
  ArrowRight,
  User,
} from "lucide-react";
import { useAssistantStore } from "@/stores/useAssistantStore";
import { HEROES_DATABASE } from "@/data/heroes";

const QUICK_PRESETS = [
  { title: "Bear Hunt Score Setup", prompt: "What is the best hero team for Bear Hunt?", icon: "🐻" },
  { title: "Molly vs Jeronimo", prompt: "Compare Molly vs Jeronimo", icon: "⚔️" },
  { title: "Furnace 30 Requirements", prompt: "How many resources for Furnace 30?", icon: "🔥" },
  { title: "SvS Castle War Strategy", prompt: "Explain State vs State prep phase strategy", icon: "🛡️" },
];

function AssistantContent() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get("prompt") || "";

  const { messages, isThinking, sendMessage, clearHistory } = useAssistantStore();
  const [inputText, setInputText] = useState("");
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
    }
  }, [initialPrompt, sendMessage]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText("");
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-8rem)] flex flex-col bg-odin-card border border-odin-border/70 rounded-3xl shadow-odin overflow-hidden animate-in fade-in duration-300">
      {/* AI Header */}
      <div className="p-4 border-b border-odin-border/60 bg-odin-sidebar flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-odin-accent">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-extrabold text-odin-text-main flex items-center gap-2">
              ODIN WSIP Intelligence AI <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono">v3.5 RAG</span>
            </h1>
            <p className="text-[11px] text-odin-text-muted">Connected to Whiteout Survival Gen 1-6 Knowledge Base</p>
          </div>
        </div>

        <button
          onClick={clearHistory}
          className="p-2 rounded-xl text-odin-text-muted hover:text-red-400 hover:bg-odin-card text-xs flex items-center gap-1 transition-colors"
          title="Clear Conversation"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Thread Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-odin-border">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser
                    ? "bg-blue-600 text-white"
                    : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`space-y-3 max-w-2xl ${isUser ? "items-end" : "items-start"}`}>
                <div
                  className={`p-4 rounded-2xl text-xs leading-relaxed ${
                    isUser
                      ? "bg-odin-primary text-white font-medium shadow-sm"
                      : "bg-odin-sidebar/90 border border-odin-border/60 text-odin-text-main"
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.content}</div>

                  {msg.heroCards && msg.heroCards.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-odin-border/40 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.heroCards.map((heroId) => {
                        const hero = HEROES_DATABASE.find((h) => h.id === heroId);
                        if (!hero) return null;
                        return (
                          <Link
                            key={hero.id}
                            href={`/heroes/${hero.id}`}
                            className="p-2.5 rounded-xl bg-odin-card border border-odin-border/60 hover:border-cyan-400 text-xs flex items-center justify-between group transition-all"
                          >
                            <div>
                              <div className="font-bold text-odin-text-main group-hover:text-cyan-400">{hero.name}</div>
                              <div className="text-[10px] text-odin-text-muted">G{hero.generation} • {hero.class}</div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-odin-text-muted group-hover:translate-x-1 transition-transform" />
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {msg.suggestedFollowups && msg.suggestedFollowups.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-odin-border/40 space-y-1.5">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">Suggested Followups:</span>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {msg.suggestedFollowups.map((f, i) => (
                          <button
                            key={i}
                            onClick={() => sendMessage(f)}
                            className="px-2.5 py-1 rounded-lg bg-odin-card border border-odin-border/50 text-[11px] text-odin-text-muted hover:text-cyan-400 transition-colors text-left"
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-[10px] font-mono text-odin-text-muted px-1 block">{msg.timestamp}</span>
              </div>
            </div>
          );
        })}

        {isThinking && (
          <div className="flex items-center gap-3 text-xs text-cyan-400 font-mono">
            <Bot className="w-4 h-4 animate-bounce" />
            <span>Analyzing WSIP database & synthesizing strategy response...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      <div className="px-4 py-2 bg-odin-sidebar/80 border-t border-odin-border/40 flex items-center gap-2 overflow-x-auto">
        <span className="text-[10px] font-mono text-odin-text-muted shrink-0">Presets:</span>
        {QUICK_PRESETS.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(preset.prompt)}
            className="px-3 py-1 rounded-xl bg-odin-card border border-odin-border/40 hover:border-cyan-500/50 text-xs text-odin-text-muted hover:text-odin-text-main shrink-0 transition-all flex items-center gap-1.5"
          >
            <span>{preset.icon}</span>
            <span>{preset.title}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-odin-sidebar border-t border-odin-border/60 flex items-center gap-3">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask ODIN AI about hero teams, counters, buildings, or SvS..."
          className="flex-1 bg-odin-card border border-odin-border/70 focus:border-cyan-500 rounded-2xl px-4 py-3 text-xs text-odin-text-main placeholder-odin-text-muted outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="px-5 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-odin-accent flex items-center gap-2"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

export default function AssistantPage() {
  return (
    <Suspense fallback={<div className="p-8 text-xs font-mono text-odin-text-muted">Loading AI Assistant...</div>}>
      <AssistantContent />
    </Suspense>
  );
}
