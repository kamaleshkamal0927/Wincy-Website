'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Activity,
  ShieldCheck,
  Cpu,
  BarChart3,
  Code2,
  Database,
  ArrowUpRight,
} from 'lucide-react';
import { appleEase } from '@/lib/motion';

export function LaptopDashboardMockup() {
  const barHeights = [40, 65, 30, 85, 92, 70, 98, 80, 88, 75, 90, 96];

  const metrics = [
    { label: 'Technical Debt', grade: 'A', value: '-64%', change: 'Resolved', color: 'text-grade_good' },
    { label: 'Security Vulnerabilities', grade: 'A+', value: '0 CVE', change: 'Clean', color: 'text-grade_good' },
    { label: 'Cloud Architecture Health', grade: 'A', value: '98.4%', change: '+34.2%', color: 'text-grade_good' },
    { label: 'AST Logic Parity', grade: 'A', value: '100%', change: 'Verified', color: 'text-grade_good' },
  ];

  const modulesTable = [
    { module: 'AccountLedger.cbl', type: 'COBOL Batch', target: 'account-ledger-service (Go)', status: 'Migrated', time: '1.2s' },
    { module: 'InventoryGateway.java', type: 'Java 6 Monolith', target: 'inventory-api (Next.js/Node)', status: 'Refactored', time: '24ms' },
    { module: 'ClaimsEngine.dll', type: 'Legacy .NET', target: 'claims-processor (.NET 9)', status: 'Modernized', time: '8ms' },
    { module: 'SettlementSync.sql', type: 'Stored Procedure', target: 'Kafka Event Stream', status: 'Modernized', time: '14ms' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto rounded-card bg-ink_black p-2 sm:p-3 shadow-device border border-border_dark">
      {/* Laptop Screen Bezel */}
      <div className="relative rounded-[16px] bg-ink_panel border border-border_dark/80 overflow-hidden text-white font-sans">
        {/* Dashboard Top Navigation */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border_dark bg-ink_black/60">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono font-medium text-text_muted_on_dark ml-2">
              wincy-analytics / enterprise-audit-v3
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-lime_accent/10 border border-lime_accent/30 text-lime_text_on_dark text-[11px] font-mono">
              ● Cluster Healthy
            </span>
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Top 4 Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-3 sm:p-4 rounded-card bg-ink_card border border-border_dark/80"
              >
                <div className="flex items-center justify-between text-xs text-text_muted_on_dark mb-1">
                  <span className="truncate">{m.label}</span>
                  <span className={`font-mono font-bold text-xs ${m.color}`}>{m.grade}</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                  {m.value}
                </div>
                <div className="text-[10px] text-lime_text_on_dark font-mono mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-lime_accent" />
                  {m.change}
                </div>
              </div>
            ))}
          </div>

          {/* Lime Bar Chart & Velocity Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-4 rounded-card bg-ink_card border border-border_dark/80">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    Automated Modernization Velocity
                  </h4>
                  <p className="text-xs text-text_muted_on_dark">
                    Lines of code transformed and verified per sprint (in 10k LOC)
                  </p>
                </div>
                <span className="text-xs font-mono text-lime_accent bg-lime_accent/10 px-2 py-0.5 rounded">
                  +184% MoM
                </span>
              </div>

              {/* Bar Chart Container */}
              <div className="h-32 flex items-end justify-between gap-1.5 sm:gap-2 pt-4 px-2">
                {barHeights.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.04, ease: appleEase }}
                      className="w-full bg-gradient-to-t from-mint_soft to-lime_accent rounded-t hover:brightness-125 transition-all cursor-pointer shadow-sm"
                    />
                    <span className="text-[9px] font-mono text-text_muted_on_dark">
                      W{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Microservice Health Radial / Status */}
            <div className="p-4 rounded-card bg-ink_card border border-border_dark/80 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white tracking-tight mb-1">
                  Architecture Score
                </h4>
                <p className="text-xs text-text_muted_on_dark mb-4">
                  Well-Architected Scorecard
                </p>

                <div className="flex items-center justify-center py-2">
                  <div className="relative w-28 h-28 rounded-full border-4 border-border_dark flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-lime_accent border-t-transparent -rotate-45" />
                    <div className="text-center">
                      <span className="font-mono text-2xl font-bold text-lime_accent">98.4</span>
                      <span className="block text-[10px] text-text_muted_on_dark uppercase">Grade A</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-center text-text_muted_on_dark font-mono pt-2 border-t border-border_dark/50">
                100% Zero Single-Point-of-Failure
              </div>
            </div>
          </div>

          {/* Transformation Audit Table */}
          <div className="rounded-card bg-ink_card border border-border_dark/80 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border_dark/80 text-[11px] font-mono text-text_muted_on_dark uppercase bg-ink_black/30">
                  <th className="py-2.5 px-4">Legacy Module</th>
                  <th className="py-2.5 px-4">Original Architecture</th>
                  <th className="py-2.5 px-4">Target Modernized Service</th>
                  <th className="py-2.5 px-4 text-right">Execution Latency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border_dark/40 font-mono">
                {modulesTable.map((row) => (
                  <tr key={row.module} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-2.5 px-4 text-white font-medium flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-lime_accent" />
                      {row.module}
                    </td>
                    <td className="py-2.5 px-4 text-text_muted_on_dark">{row.type}</td>
                    <td className="py-2.5 px-4 text-lime_text_on_dark">{row.target}</td>
                    <td className="py-2.5 px-4 text-right text-text_muted_on_dark">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
