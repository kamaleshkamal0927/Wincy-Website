'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Network,
  Code2,
  CheckCircle2,
  GitBranch,
  Terminal,
  Layers,
  Search,
} from 'lucide-react';
import { appleEase } from '@/lib/motion';

export function FannedWindowsMockup() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const windows = [
    {
      id: 'assessment',
      title: 'Assessment Engine Report',
      icon: Layers,
      preview: 'Legacy Debt Index: 82% (4,210 Anti-Patterns Resolved)',
      tags: ['COBOL v4', 'Oracle DB2', 'Complexity A+'],
      color: 'border-lime_accent/40',
      rotation: -6,
      xOffset: -20,
      yOffset: 0,
    },
    {
      id: 'apidocs',
      title: 'API Modernization (OpenAPI 3.1)',
      icon: Network,
      preview: 'POST /v2/transactions/settlement → 200 OK (14ms latency)',
      tags: ['OAuth2', 'Rate-Limited', 'gRPC Bridge'],
      color: 'border-white/20',
      rotation: -2,
      xOffset: 0,
      yOffset: 12,
    },
    {
      id: 'architecture',
      title: 'Architecture Graph (Cloud Native)',
      icon: GitBranch,
      preview: 'Microservices Mesh: 14 Decoupled Event Domains',
      tags: ['AWS ECS', 'Kafka', 'PostgreSQL Multi-AZ'],
      color: 'border-white/20',
      rotation: 3,
      xOffset: 20,
      yOffset: 24,
    },
    {
      id: 'documentation',
      title: 'Functional Documentation & Knowledge Base',
      icon: FileText,
      preview: 'Business Rules Catalog: 890 Extracted Calculation Invariants',
      tags: ['Auto-Generated', 'AST Verified', 'AI Chat Indexed'],
      color: 'border-lime_accent/60',
      rotation: 7,
      xOffset: 40,
      yOffset: 36,
    },
  ];

  return (
    <div className="relative w-full max-w-lg h-[360px] sm:h-[400px] flex items-center justify-center select-none">
      {windows.map((win, idx) => {
        const Icon = win.icon;
        const isHovered = hoveredIdx === idx;

        return (
          <motion.div
            key={win.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              rotate: isHovered ? 0 : win.rotation,
              x: win.xOffset,
              y: isHovered ? win.yOffset - 20 : win.yOffset,
              scale: isHovered ? 1.05 : 1,
              zIndex: isHovered ? 30 : idx + 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 24,
            }}
            className={`absolute top-6 left-2 sm:left-6 right-2 sm:right-6 p-4 rounded-card bg-ink_panel border ${win.color} shadow-device cursor-pointer text-white backdrop-blur-xl transition-colors duration-200`}
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-3 border-b border-border_dark">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-text_muted_on_dark ml-2 flex items-center gap-1.5 truncate">
                  <Icon className="w-3.5 h-3.5 text-lime_accent" />
                  {win.title}
                </span>
              </div>
              <span className="text-[10px] font-mono text-lime_accent bg-lime_accent/10 px-2 py-0.5 rounded">
                Live
              </span>
            </div>

            {/* Window Body */}
            <div className="pt-3">
              <p className="text-xs font-mono text-white/90 bg-ink_black/60 p-2.5 rounded-lg border border-border_dark/60 truncate">
                {win.preview}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {win.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-text_muted_on_dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
