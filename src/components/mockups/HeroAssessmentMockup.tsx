'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowUpRight,
  Terminal,
} from 'lucide-react';
import { appleEase } from '@/lib/motion';

interface ModuleRow {
  name: string;
  category: string;
  status: 'Critical Risk' | 'Needs Refactor' | 'In Progress' | 'Modernized';
  grade: 'D' | 'C' | 'B' | 'A';
  gradeColor: string;
  badgeBg: string;
}

const MODULES: ModuleRow[] = [
  {
    name: 'Core Billing Engine',
    category: 'Legacy COBOL v4.2 / DB2',
    status: 'Critical Risk',
    grade: 'D',
    gradeColor: 'text-grade_bad',
    badgeBg: 'bg-grade_bad/15 border-grade_bad/30 text-grade_bad',
  },
  {
    name: 'Auth & Session Mgmt',
    category: 'Stateful Monolith / Java 6',
    status: 'Needs Refactor',
    grade: 'C',
    gradeColor: 'text-grade_warn',
    badgeBg: 'bg-grade_warn/15 border-grade_warn/30 text-grade_warn',
  },
  {
    name: 'Reporting Module',
    category: 'Batch ETL / PL-SQL',
    status: 'In Progress',
    grade: 'B',
    gradeColor: 'text-grade_ok',
    badgeBg: 'bg-grade_ok/15 border-grade_ok/30 text-grade_ok',
  },
  {
    name: 'API Gateway',
    category: 'Cloud-Native / Go & gRPC',
    status: 'Modernized',
    grade: 'A',
    gradeColor: 'text-grade_good',
    badgeBg: 'bg-grade_good/15 border-grade_good/30 text-grade_good',
  },
];

const STEPS = [
  { name: 'Assess', completed: true },
  { name: 'Refactor', completed: true },
  { name: 'Migrate', completed: true },
  { name: 'Validate', completed: false },
];

export function HeroAssessmentMockup() {
  const [readiness, setReadiness] = useState(0);
  const [checkedBox, setCheckedBox] = useState(false);

  // Animate progress bar to 84%
  useEffect(() => {
    const timer = setTimeout(() => {
      setReadiness(84);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Faux cursor checkbox tick loop (8s interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setCheckedBox((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-panel border border-border_dark bg-ink_panel shadow-device overflow-hidden text-white font-sans select-none">
      {/* Chrome Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-border_dark bg-ink_black/80 backdrop-blur-md">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <div className="h-4 w-[1px] bg-border_dark mx-2 hidden sm:block" />
          <span className="text-xs font-mono text-text_muted_on_dark hidden sm:inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-lime_accent" />
            legacy-assessment.ai
          </span>
        </div>

        {/* Pulsing Live Scan Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-lime_accent/10 border border-lime_accent/30 text-lime_text_on_dark text-xs font-mono font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime_accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime_accent" />
          </span>
          LIVE SCAN ACTIVE
        </div>
      </div>

      {/* Main Container */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Stepper Bar */}
        <div className="bg-ink_card/80 p-3.5 sm:p-4 rounded-card border border-border_dark">
          <div className="flex items-center justify-between">
            {STEPS.map((step, idx) => (
              <React.Fragment key={step.name}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      step.completed
                        ? 'bg-lime_accent text-ink_black'
                        : 'bg-white/10 text-text_muted_on_dark border border-white/20'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-ink_black" />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:inline ${
                      step.completed ? 'text-white' : 'text-text_muted_on_dark'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-[2px] mx-2 transition-colors duration-500 ${
                      step.completed ? 'bg-lime_accent' : 'bg-white/10'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Readiness Meter Card */}
        <div className="bg-ink_card p-4 rounded-card border border-border_dark">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-lime_accent" />
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-white">
                Modernization Readiness
              </span>
            </div>
            <div className="text-right">
              <span className="font-mono text-xl sm:text-2xl font-bold text-lime_accent">
                {readiness}%
              </span>
              <span className="text-[10px] text-text_muted_on_dark block">
                Target: 95%
              </span>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <div className="w-full h-2.5 bg-ink_black rounded-full overflow-hidden p-[1px] border border-border_dark">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${readiness}%` }}
              transition={{ duration: 1.2, ease: appleEase }}
              className="h-full bg-gradient-to-r from-mint_light via-lime_accent to-lime_accent rounded-full shadow-[0_0_12px_rgba(77,255,58,0.5)]"
            />
          </div>
        </div>

        {/* Modules Table List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-text_muted_on_dark uppercase tracking-wider px-2">
            <span>Subsystem / Architecture</span>
            <span>Status / Grade</span>
          </div>

          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: appleEase }}
              className="group flex items-center justify-between p-3 rounded-card bg-ink_card/90 hover:bg-ink_card border border-border_dark/80 hover:border-border_dark transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-ink_black border border-border_dark/60 text-text_muted_on_dark group-hover:text-white transition-colors">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white tracking-tight">
                    {mod.name}
                  </p>
                  <p className="text-[10px] sm:text-xs font-mono text-text_muted_on_dark">
                    {mod.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span
                  className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${mod.badgeBg}`}
                >
                  {mod.status}
                </span>

                {/* Grade Badge */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs sm:text-sm bg-ink_black border border-border_dark shadow-inner ${mod.gradeColor}`}
                >
                  {mod.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating AI Insight Pill Footer */}
        <div className="flex items-center justify-between p-3 rounded-card bg-lime_accent/10 border border-lime_accent/20 text-xs text-lime_text_on_dark">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime_accent animate-pulse" />
            <span className="font-semibold">AI-Powered AST Scanner:</span>
            <span className="text-white/80 hidden sm:inline">
              Zero business logic regression detected in 142k AST nodes.
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-lime_accent">
            <input
              type="checkbox"
              checked={checkedBox}
              readOnly
              className="accent-lime_accent rounded cursor-pointer"
            />
            <span className="text-[10px] text-text_muted_on_dark">Auto-Remediate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
