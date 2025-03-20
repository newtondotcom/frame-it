import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { Link } from "react-router";
import { RainbowText } from "@/components/ui/rainbow-test";

export default function Welcome() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-12">
          <div className="flex flex-col justify-center space-y-4 w-1/2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Redefining Digital Frames with E-Ink Technology
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Low power, always-on display that brings your memories to life
                with the comfort of paper-like viewing.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/preorder">
                <Button
                  size="lg"
                  className="bg-black dark:bg-white text-secondary"
                >
                  Preorder Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="#waitlist">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white dark:bg-black"
                >
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 w-full">
            <div className="flex flex-col items-center">
              <h3 className="">
                You thought that E-Ink was only black in white, as in your
                ereader? Well, we thought so...
              </h3>
              <h2 className="text-3xl">
                but it has
                <RainbowText>&#xA0;colors !</RainbowText>
              </h2>
              <span> Scroll down to discover our site with colors.</span>
              <ChevronsDown size={300} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
