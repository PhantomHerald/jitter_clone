"use client";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import useAnimatedText from "@/src/hooks/hero/useAnimatedText";

export default function Hero() {
  const { refs } = useAnimatedText();

  return (
    <div ref={refs.containerRef} className="w-screen">
      <div className="hero-container invisible flex items-center flex-col gap-[35px] mt-[130px] lg:py-20 overflow-hidden">
        <div className="hero-badge">
          <Link
            href="https://jitter.video/changelog/2025-02-04-infinite-canvas/"
            aria-labelledby="changelog"
          >
            <div
              id="changelog"
              className="bg-light-grey rounded-full py-2 px-4 w-fit"
            >
              <strong>New:</strong> Pen tool & Morphing{" "}
              <span className="text-purple font-semibold ml-1">
                {" "}
                learn more
              </span>
            </div>
          </Link>
        </div>

        <h2 className="hero-text lg:text-[80px] text-6xl font-extrabold tracking-[-2.4px] !leading-[90%] text-center text-dark">
          Super <br className="md:hidden" /> Fast motion
          <br /> for every team
        </h2>

        <div>
          <Button
            ariaId="try_jitter"
            className="hero-button bg-[#b593ff] text-dark font-semibold px-12 py-4 text-xl"
          >
            Try Jitter for free
          </Button>
        </div>
      </div>
    </div>
  );
}
