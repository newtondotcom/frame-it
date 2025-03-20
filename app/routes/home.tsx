import type { Route } from "./+types/home";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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
    <div className="flex flex-col min-h-screen">
      < Header />
      <main className="flex-1 pt-8">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20">
          <Welcome />
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <Features />
        </section>

        <section id="specs" className="w-full py-12 md:py-24 lg:py-32">
          < Specs />
        </section>        
        
        <section id="content" className="w-full py-12 md:py-24 lg:py-32">
          < Content />
        </section>

        <section id="buy" className="w-full py-12 md:py-24 lg:py-32">
          < Convinced />
        </section>
      </main>
      <Footer />
    </div>
  );
}
