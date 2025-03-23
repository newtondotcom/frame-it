import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { Link } from "react-router";
import { RainbowText } from "@/components/ui/rainbow-text";
import { TypingAnimation } from "../ui/text-typing";
import { useRef } from "react";

export default function Welcome() {
  const chevronsRef = useRef(null);
  const isInView = useInView(chevronsRef, { once: true, amount: 0.5 }); // Trigger when 50% of the icon is visible

  // Animation variants
  const chevronsVariants = {
    offscreen: {
      y: 100, // Start below the screen
      opacity: 0,
    },
    onscreen: {
      y: 0, // Move to the original position
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-12">
          <div className="flex flex-col justify-center space-y-4 w-1/2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your New Digital Frame with E-Ink Technology
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Low power, always-on display that brings your memories to life
                with the comfort of paper-like viewing.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 w-full">
            <div className="flex flex-col items-center">
              <h3 className="">
                You thought that E-Ink was only black in white, as in your
                ereader? Well, we thought so...
              </h3>
              <h2 className="text-3xl flex flex-row space-x-2">
                <span className="text-4xl font-bold leading-[5rem] tracking-[-0.02em] text-background">
                  d
                </span>
                <TypingAnimation duration={50}>but it has</TypingAnimation>
                <TypingAnimation
                  duration={50}
                  delay={550}
                  className="underline"
                >
                  colors !
                </TypingAnimation>
              </h2>
              <span> Scroll down to discover our site with colors.</span>
              <motion.div
                ref={chevronsRef}
                initial="offscreen"
                animate={isInView ? "onscreen" : "offscreen"}
                variants={chevronsVariants}
                className="text-black dark:text-white"
              >
                <ChevronsDown size={300} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
