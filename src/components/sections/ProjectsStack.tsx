import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type P = {
  title: string;
  desc: string;
  href: string;
  tags: string[];
};

const projects: P[] = [
  {
    title: "SmartAgro / Cuaderno de Campo",
    desc: "Plataforma agrícola: normativa + sensores + dashboards + trazabilidad.",
    href: "/projects/smartagro",
    tags: ["React", "Flask", "MySQL", "InfluxDB"],
  },
  {
    title: "LifeOS",
    desc: "App personal tipo dashboard: métricas, mapas, hábitos y login.",
    href: "#",
    tags: ["Node", "Postgres", "UI"],
  },
  {
    title: "Detección de insectos",
    desc: "Web Flask + análisis automático de imágenes + base de datos.",
    href: "#",
    tags: ["Flask", "CV", "DB"],
  },
];

function Card({ p, i }: { p: P; i: number }) {
  // pequeñas variaciones para dar “profundidad”
  const y = i * 14;
  const scale = 1 - i * 0.03;

  return (
    <div
      className="sticky top-28"
      style={{ transform: `translateY(${y}px) scale(${scale})` }}
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <a
            href={p.href}
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10"
          >
            Case study →
          </a>
        </div>
        <p className="mt-3 text-zinc-300">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-2xl border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsStack() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // leve “fade in” global para darle vida
  const opacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="relative space-y-10 pb-24">
      <div className="h-[10vh]" />
      {projects.map((p, i) => (
        <Card key={p.title} p={p} i={i} />
      ))}
      <div className="h-[30vh]" />
    </motion.div>
  );
}
