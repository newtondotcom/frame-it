import type { Route } from "./+types/home";
import Welcome from "@/components/sections/welcome";
import Features from "@/components/sections/features";
import Specs from "@/components/sections/specs";
import Convinced from "@/components/sections/convinced";
import Content from "@/components/sections/content";

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
  return (
    <main className="flex-1 snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Welcome Section */}
      <section className="snap-start h-screen w-full pt-24">
        <Welcome />
      </section>

      {/* Features Section */}
      <section id="features" className="snap-start h-screen w-full pt-24">
        <Features />
      </section>

      {/* Specs Section */}
      <section id="specs" className="snap-start h-screen w-full pt-24">
        <Specs />
      </section>

      {/* Content Section */}
      <section id="content" className="snap-start h-screen w-full pt-24">
        <Content />
      </section>

      {/* Convinced Section */}
      <section id="buy" className="snap-start h-screen w-full pt-24">
        <Convinced />
      </section>
    </main>
  );
}
