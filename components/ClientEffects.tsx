"use client";

import { useEffect, useRef } from "react";

export default function ClientEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- Custom Cursor ---
    const cursor = cursorRef.current;
    if (!cursor) return;

    let cx = 0, cy = 0, mx = 0, my = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animCursor = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      if (cursor) {
        cursor.style.left = cx + "px";
        cursor.style.top = cy + "px";
      }
      requestAnimationFrame(animCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animCursor();

    const addHover = () => cursor.classList.add("hover");
    const removeHover = () => cursor.classList.remove("hover");

    const interactiveElements = document.querySelectorAll(
      "a, button, .cc, .pc, .ic, .tc, .btn-p, .btn-s, .btn-pc, .btn-sub, .nav-cta, .gallery-scroll img"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // --- Loader ---
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => loader.classList.add("hidden"), 2200);
    }

    // --- Scroll Reveal ---
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            const parent = el.parentElement;
            if (parent) {
              const siblings = parent.querySelectorAll(
                ".rv, .rv-left, .rv-right, .rv-scale"
              );
              let delay = 0;
              siblings.forEach((sib) => {
                const s = sib as HTMLElement;
                if (!s.classList.contains("vis")) {
                  setTimeout(() => s.classList.add("vis"), delay);
                  delay += 100;
                }
              });
            }
            el.classList.add("vis");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".rv, .rv-left, .rv-right, .rv-scale").forEach((el) =>
      obs.observe(el)
    );

    // --- Counter Animation ---
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const h4 = en.target.querySelector("h4");
            if (h4) {
              const target = parseInt(h4.getAttribute("data-target") || "0");
              const suffix = h4.getAttribute("data-target-suffix") || "";
              if (!isNaN(target)) {
                let current = 0;
                const duration = 1500;
                const stepTime = Math.max(duration / target, 10);
                const interval = setInterval(() => {
                  current++;
                  h4.textContent = current + suffix;
                  if (current >= target) clearInterval(interval);
                }, stepTime);
              }
            }
            counterObs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".stat").forEach((el) => counterObs.observe(el));

    // --- 3D Tilt on Pricing Cards ---
    document.querySelectorAll(".pc").forEach((card) => {
      const c = card as HTMLElement;
      c.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = c.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (y - 0.5) * -8;
        const ry = (x - 0.5) * 8;
        c.style.setProperty("--rx", rx + "deg");
        c.style.setProperty("--ry", ry + "deg");
      });
      c.addEventListener("mouseleave", () => {
        c.style.setProperty("--rx", "0deg");
        c.style.setProperty("--ry", "0deg");
      });
    });

    // --- Magnetic Buttons ---
    document.querySelectorAll(".btn-p, .btn-s, .btn-pc, .btn-sub, .nav-cta").forEach((btn) => {
        const b = btn as HTMLElement;
        b.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = b.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          b.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        b.addEventListener("mouseleave", () => {
          b.style.transform = "";
        });
      });

    // --- Nav Scroll ---
    const handleScroll = () => {
      const nav = document.getElementById("nav");
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 80);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // --- Gallery Pause ---
    const gallery = document.querySelector(".gallery-scroll") as HTMLElement;
    if (gallery) {
      const pause = () => (gallery.style.animationPlayState = "paused");
      const play = () => (gallery.style.animationPlayState = "running");
      gallery.addEventListener("mouseenter", pause);
      gallery.addEventListener("mouseleave", play);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} id="cursor"></div>
      <div className="loader" id="loader">
        <div className="loader-brand">Lumix</div>
        <div className="loader-line"></div>
        <div className="loader-sub">Pilates & Hot Yoga Studio</div>
      </div>
    </>
  );
}
