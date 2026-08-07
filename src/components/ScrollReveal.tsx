import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Globální scroll-reveal: každá <section> uvnitř <main> se plynule vynoří,
 * její přímé děti navíc s jemným postupným zpožděním.
 */
export function ScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const targets: HTMLElement[] = [];
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section"),
    );

    sections.forEach((section) => {
      const children = Array.from(section.children).filter(
        (c): c is HTMLElement => c instanceof HTMLElement,
      );
      const group = children.length > 0 ? children : [section];
      group.forEach((el, i) => {
        if (el.dataset["revealed"] === "true") return;
        el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 90}ms`);
        el.classList.add("reveal");
        targets.push(el);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("reveal-in");
          el.dataset["revealed"] = "true";
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
