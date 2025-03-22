import type { Route } from "./+types/home";
import Welcome from "@/components/sections/welcome";
import Features from "@/components/sections/features";
import Specs from "@/components/sections/specs";
import Convinced from "@/components/sections/convinced";
import Content from "@/components/sections/content";
import { useEffect, useRef } from "react";
import { useIsVisible } from "@/hooks/use-is-visible";
import { useRainbow } from "@/hooks/use-is-rainbow";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FrameIt" },
    {
      name: "description",
      content:
        "Redefining digital frames with E-Ink technology. Low power, always-on display that brings your memories to life.",
    },
  ];
}

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const { toggleRainbow } = useRainbow();

  useEffect(() => {
    if (isVisible) {
      toggleRainbow();
      console.log("Rainbow mode enabled");
    }
  }, [isVisible]);

  return (
    <main className="flex-1 snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Welcome Section */}
      <section className="snap-start h-screen w-full pt-24 flex flex-col justify-center items-center">
        <Welcome />
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="snap-start h-screen w-full pt-24 flex flex-col justify-center items-center"
      >
        <Features />
      </section>

      {/* Specs Section */}
      <section
        id="specs"
        ref={ref}
        className="snap-start h-screen w-full pt-24 flex flex-col justify-center items-center"
      >
        <Specs />
      </section>

      {/* Content Section */}
      <section
        id="content"
        className="snap-start h-screen w-full pt-24 flex flex-col justify-center items-center"
      >
        <Content />
      </section>

      {/* Convinced Section */}
      <section
        id="buy"
        className="snap-start h-screen w-full pt-24 flex flex-col justify-center items-center"
      >
        <Convinced />
      </section>
    </main>
  );
}
