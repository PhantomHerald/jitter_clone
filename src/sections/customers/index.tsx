"use client";

import Image from "next/image";
import { logoItems } from "@/src/data/logo_set";
import useBrandDisplay from "@/src/hooks/customers/useBrandDisplay";
import { useMemo } from "react";
import { cn } from "@/src/utils/tailwind";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Customers() {
  const { state, refs } = useBrandDisplay();
  const allLogos = useMemo(() => {
    return logoItems.flatMap((item) => item.images);
  }, []);

  useGSAP(() => {
    gsap.to(".extratext", {
      opacity: 1,
      duration: 1.5,
      delay: 0.2,
      ease: "power4.out",
    });
  }, []);
  return (
    <div
      ref={refs.scope}
      aria-hidden={true}
      className="space-y-10 pt-[9] px-0 md:px-20"
    >
      <p className="extratext text-[15px] text-dark text-center opacity-0">
        <strong>over 20,000 creative teams use jitter</strong>{" "}
        <span className="font-light">
          {" "}
          to create stunning annimations online
        </span>
      </p>

      <div className="wrapper h-[35px]">
        {state.hasMounted && (
          <div>
            <div
              className={cn("flex justify-center items-center", {
                hidden: !state.isDesktop,
              })}
            >
              {logoItems.map((items, i) => (
                <div
                  key={i}
                  className="logo-container flex justify-center relative h-[35px] w-full"
                >
                  {items.images.map((item, i) => (
                    <Image
                      key={item.alt}
                      src={item.src}
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                      className={cn(
                        "logo absolute top-0 left-1/2 -translate-x-1/2",
                        {
                          "scale-0 opacity-50": i === 1,
                        },
                        `w-${item.width}`,
                        `h-${item.height}`
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className={cn("fade-edges", { hidden: state.isDesktop })}>
              <div className=" w-full overflow-hidden">
                <div
                  className="customers-marquee flex items-center"
                  style={{ width: "max-content" }}
                >
                  {allLogos.map((item) => (
                    <div key={item.alt} className="px-4">
                      <Image
                        src={item.src}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                        className={cn(
                          "logo",
                          `w-${item.width}`,
                          `h-${item.height}`
                        )}
                      />
                    </div>
                  ))}
                  {allLogos.map((item) => (
                    <div key={item.alt} className="px-4">
                      <Image
                        src={item.src}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                        className={cn(
                          "logo",
                          `w-${item.width}`,
                          `h-${item.height}`
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
