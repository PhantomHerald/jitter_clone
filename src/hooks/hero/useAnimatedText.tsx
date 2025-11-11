"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function useAnimatedText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(".hero-container", {
        autoAlpha: 1,
      });

      const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.5)" } });

      tl.from(
        ".hero-badge, .hero-text, .hero-button",
        {
          scale: 2.5,
          opacity: 0,
          rotate: 5,
          y: -50,
          stagger: 0.2,
          duration: (index) => {
            return 1 + 0.2 * (index + 1);
          },
        },
        0
      )
        .to(
          ".hero-text, .hero-button, .hero-badge",
          {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.out",
          },
          "-=0.2"
        )
        .to(".hero-text, .hero-button, .hero-badge ", {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    },
    { scope: containerRef }
  );

  return { refs: { containerRef } };
}
