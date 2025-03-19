import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import WaitlistForm from "@/components/waitlist-form";
import { BentoDemo } from "@/components/bento";
import Configure from "@/components/configure";
import Header from "@/components/layout/header";

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
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Redefining Digital Frames with E-Ink Technology
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Low power, always-on display that brings your memories to
                    life with the comfort of paper-like viewing.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/preorder">
                    <Button size="lg">
                      Preorder Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="#waitlist">
                    <Button size="lg" variant="outline">
                      Join Waitlist
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center pt-12">
            <HeroVideoDialog
              className="block dark:hidden w-1/2"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block w-1/2"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="min-w-full container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover what makes FrameIt the perfect digital frame for your
                  home
                </p>
              </div>
            </div>
            <BentoDemo />
          </div>
        </section>

        <section id="specs" className="w-full py-12 md:py-24 lg:py-32">
          <div className="min-w-full container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Product Configurations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Available in multiple sizes and colors to fit your needs
                </p>
              </div>
            </div>
            <div className="flex flex-col mx-auto max-w-5xl py-12 items-center">
              <Configure />
            </div>
          </div>
        </section>        
        
        <section id="content" className="w-full py-12 md:py-24 lg:py-32">
          <div className="min-w-full container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Choose what to diplay
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Navigate through our app and build your <span className="text-primary">Frame</span> customizez content
                </p>
              </div>
            </div>
            <div className="flex flex-col mx-auto max-w-5xl py-12 items-center">
              Discover mockups we have built for you <Link to="/mockups">here</Link>
            </div>
          </div>
        </section>

        <section id="waitlist">
          <div className="min-w-full px-4 py-12 md:py-24 lg:py-32">
            <div className="z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <h2 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-amber-400 to-yellow-300/20">
                Join Our Waitlist
              </h2>
            </div>
            <div className="min-w-full container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Be the first to know when FrameIt is available for purchase
                  </p>
                </div>
                <div className="w-full max-w-md">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
