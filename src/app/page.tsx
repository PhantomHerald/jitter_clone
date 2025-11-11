"use client";

// Tools
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import Draggable from "gsap/Draggable";
import SplitText from "gsap/SplitText";
import InertiaPlugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

// Sections

import Hero from "@/src/sections/hero";
import Customers from "../sections/customers";
gsap.registerPlugin(
  ScrollTrigger,
  useGSAP,
  SplitText,
  Draggable,
  InertiaPlugin,
  GSDevTools
);

export default function Home() {

  return (
    <div className="bg-white relative z-10 ">
      <h1 className="sr-only">Jitter</h1>
      <main id="main">
        <div className=" mx-auto">
          <Hero />
          <Customers/>
        </div>
      </main>
    </div>
  );
}
