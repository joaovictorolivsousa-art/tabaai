"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  as?: "div" | "span";
}

const delayClass: Record<number, string> = {
  0: "",
  1: "delay-[80ms]",
  2: "delay-[160ms]",
  3: "delay-[240ms]",
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as any}
      className={`reveal ${visible ? "in" : ""} ${delayClass[delay]} ${className}`}
    >
      {children}
    </Tag>
  );
}
