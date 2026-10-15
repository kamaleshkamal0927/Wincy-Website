'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  GitBranch,
  Layers,
  FileCode,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
} from 'lucide-react';
import { appleEase } from '@/lib/motion';

export function CarouselTabMockup({ tabType }: { tabType: string }) {
  if (tabType === 'transformation') {
    return (
      <div className="w-full rounded-card bg-ink_panel border border-border_dark p-4 font-mono text-xs text-white shadow-card">
        <div className="flex items-center justify-between pb-3 border-b border-border_dark mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[11px] text-text_muted_on_dark ml-2">
              ast-transformer: cobol → typescript / go
            </span>
          </div>
          <span className="text-[10px] text-lime_accent bg-lime_accent/10 px-2 py-0.5 rounded">
            AST Parity 100%
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Legacy side */}
          <div className="p-3 rounded-lg bg-ink_black border border-border_dark/60">
            <div className="text-[10px] text-grade_bad uppercase font-bold mb-2 flex items-center justify-between">
              <span>Legacy Monolith (COBOL)</span>
              <span>Input</span>
            </div>
            <pre className="text-[11px] text-text_muted_on_dark leading-relaxed overflow-x-auto">
{`000100 IDENTIFICATION DIVISION.
000200 PROGRAM-ID. CALC-FEE.
000300 DATA DIVISION.
000400  01 WS-TRAN-AMOUNT PIC 9(7)V99.
000500  01 WS-FEE-PCT     PIC V999 VALUE .015.
000600 PROCEDURE DIVISION.
000700  COMPUTE WS-FINAL-FEE = 
          WS-TRAN-AMOUNT * WS-FEE-PCT.`}
            </pre>
          </div>

          {/* Modern side */}
          <div className="p-3 rounded-lg bg-ink_black border border-lime_accent/30">
            <div className="text-[10px] text-lime_accent uppercase font-bold mb-2 flex items-center justify-between">
              <span>Modern Cloud Service (TypeScript)</span>
              <span>Output</span>
            </div>
            <pre className="text-[11px] text-lime_text_on_dark leading-relaxed overflow-x-auto">
{`export interface FeeCalculation {
  amount: Dinero<number>;
  feePercentage: number;
}

export function computeFee(
  calc: FeeCalculation
): Dinero<number> {
  return multiply(
    calc.amount, 
    calc.feePercentage
  );
}`}
            </pre>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-border_dark/60 flex items-center justify-between text-[11px] text-text_muted_on_dark">
          <span>Synthetic Test Vectors: 5,000 / 5,000 passed</span>
          <span className="text-lime_accent">Zero Regression</span>
        </div>
      </div>
    );
  }

  if (tabType === 'cloud') {
    return (
      <div className="w-full rounded-card bg-ink_panel border border-border_dark p-4 font-mono text-xs text-white shadow-card">
        <div className="flex items-center justify-between pb-3 border-b border-border_dark mb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-lime_accent" />
            <span className="text-xs text-white font-sans font-semibold">
              AWS ECS Cluster Deployment Topology
            </span>
          </div>
          <span className="text-[10px] text-lime_accent bg-lime_accent/10 px-2 py-0.5 rounded">
            Multi-AZ Active
          </span>
        </div>

        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-ink_black border border-border_dark/60 flex items-center justify-between">
            <div>
              <p className="text-white font-medium text-xs">ecs-billing-worker-v3</p>
              <p className="text-[10px] text-text_muted_on_dark">ap-south-1a • 8 Tasks • 0.02% CPU avg</p>
            </div>
            <span className="text-xs text-lime_accent font-bold">100% SLA</span>
          </div>

          <div className="p-3 rounded-lg bg-ink_black border border-border_dark/60 flex items-center justify-between">
            <div>
              <p className="text-white font-medium text-xs">aurora-postgres-serverless</p>
              <p className="text-[10px] text-text_muted_on_dark">Read Replica Failover Ready • 4ms p99</p>
            </div>
            <span className="text-xs text-lime_accent font-bold">Sync OK</span>
          </div>

          <div className="p-3 rounded-lg bg-ink_black border border-border_dark/60 flex items-center justify-between">
            <div>
              <p className="text-white font-medium text-xs">kong-api-gateway-cluster</p>
              <p className="text-[10px] text-text_muted_on_dark">TLS 1.3 • OAuth 2.0 Auth Hook • Rate-Limited</p>
            </div>
            <span className="text-xs text-lime_accent font-bold">2.4k req/s</span>
          </div>
        </div>
      </div>
    );
  }

  if (tabType === 'documentation') {
    return (
      <div className="w-full rounded-card bg-ink_panel border border-border_dark p-4 font-mono text-xs text-white shadow-card">
        <div className="flex items-center justify-between pb-3 border-b border-border_dark mb-3">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-lime_accent" />
            <span className="text-xs text-white font-sans font-semibold">
              Automated Architecture & Rule Extractor
            </span>
          </div>
          <span className="text-[10px] text-lime_accent bg-lime_accent/10 px-2 py-0.5 rounded">
            Graph Auto-Synced
          </span>
        </div>

        <div className="p-3 rounded-lg bg-ink_black border border-border_dark/60 space-y-2">
          <div className="text-[10px] text-lime_accent uppercase font-bold">
            Interactive Entity Relationship & Workflow Graph
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <span className="px-2.5 py-1 rounded bg-ink_card border border-border_dark text-[11px] text-white">
              [Legacy Order] ──(Decomposed)──► [Order Service]
            </span>
            <span className="px-2.5 py-1 rounded bg-ink_card border border-border_dark text-[11px] text-lime_text_on_dark">
              [Order Service] ──(Kafka Topic)──► [Inventory Service]
            </span>
            <span className="px-2.5 py-1 rounded bg-ink_card border border-border_dark text-[11px] text-white">
              [Inventory Service] ──(Postgres CDC)──► [Reporting Lake]
            </span>
          </div>
          <p className="text-[11px] text-text_muted_on_dark pt-1">
            ✓ 42 Business rules automatically extracted and documented in markdown.
          </p>
        </div>
      </div>
    );
  }

  if (tabType === 'testing') {
    return (
      <div className="w-full rounded-card bg-ink_panel border border-border_dark p-4 font-mono text-xs text-white shadow-card">
        <div className="flex items-center justify-between pb-3 border-b border-border_dark mb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-lime_accent" />
            <span className="text-xs text-white font-sans font-semibold">
              Production Shadow Traffic Replay & Diff
            </span>
          </div>
          <span className="text-[10px] text-lime_accent bg-lime_accent/10 px-2 py-0.5 rounded">
            Live Replay
          </span>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 rounded bg-ink_black border border-border_dark/60 flex items-center justify-between text-[11px]">
            <span>Payload #891,241 (Settlement Payload)</span>
            <span className="text-lime_accent font-bold">Diff: 0 bytes (100% Match)</span>
          </div>
          <div className="p-2.5 rounded bg-ink_black border border-border_dark/60 flex items-center justify-between text-[11px]">
            <span>Payload #891,242 (Tax Bracket Exception)</span>
            <span className="text-lime_accent font-bold">Diff: 0 bytes (100% Match)</span>
          </div>
          <div className="p-2.5 rounded bg-ink_black border border-border_dark/60 flex items-center justify-between text-[11px]">
            <span>Payload #891,243 (Currency Rounding Rule)</span>
            <span className="text-lime_accent font-bold">Diff: 0 bytes (100% Match)</span>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-border_dark/60 flex items-center justify-between text-[11px] text-text_muted_on_dark">
          <span>Latency Improvement: 480ms → 18ms</span>
          <span className="text-lime_accent">Regression-Proof</span>
        </div>
      </div>
    );
  }

  // Default: Assessment
  return (
    <div className="w-full rounded-card bg-ink_panel border border-border_dark p-4 font-mono text-xs text-white shadow-card">
      <div className="flex items-center justify-between pb-3 border-b border-border_dark mb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-lime_accent" />
          <span className="text-xs text-white font-sans font-semibold">
            AST Static & Semantic Repository Audit
          </span>
        </div>
        <span className="text-[10px] text-lime_accent bg-lime_accent/10 px-2 py-0.5 rounded">
          Scan Complete
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="p-2.5 rounded bg-ink_black border border-border_dark/60">
          <span className="text-[10px] text-text_muted_on_dark block">Total Monolithic LOC</span>
          <span className="text-sm font-bold text-white">1,240,890 LOC</span>
        </div>
        <div className="p-2.5 rounded bg-ink_black border border-border_dark/60">
          <span className="text-[10px] text-text_muted_on_dark block">Estimated Modernization Time</span>
          <span className="text-sm font-bold text-lime_accent">14 Weeks (Phased)</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-ink_black border border-border_dark/60 text-[11px] text-text_muted_on_dark space-y-1">
        <p className="text-white font-medium">Prioritized Transformation Candidates:</p>
        <p>1. Decompose batch calculation bottleneck into serverless workers</p>
        <p>2. Abstract synchronous SOAP service calls into async queue consumers</p>
        <p>3. Isolate transactional ledger schema to private microservice DB</p>
      </div>
    </div>
  );
}
