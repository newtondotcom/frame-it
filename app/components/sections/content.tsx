import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function Content() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, amount: 0.5 }); // Trigger when 50% of the component is visible

  const buttonVariants = {
    offscreen: {
      x: "-100vw", // Start off-screen to the left
      opacity: 0,
    },
    onscreen: {
      x: 0, // Move to the original position
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  const videoVariants = {
    offscreen: {
      x: "100vw", // Start off-screen to the right
      opacity: 0,
    },
    onscreen: {
      x: 0, // Move to the original position
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="min-w-full container px-4 md:px-6" ref={videoRef}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            id="content-heading"
          >
            Personalize Your Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Curate your perfect display through our intuitive web app and
            transform your <span className="text-primary">FrameIt</span> into a
            personalized window to what matters most
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-5xl py-6 items-center">
        <Link
          to="/mockups"
          aria-label="View mockup examples of FrameIt displays"
        >
          <motion.div
            initial="offscreen"
            animate={isInView ? "onscreen" : "offscreen"}
            variants={buttonVariants}
            className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
              aria-hidden="true"
            />
            🎉{" "}
            <hr
              className="mx-2 h-4 w-px shrink-0 bg-neutral-500"
              aria-hidden="true"
            />
            <AnimatedGradientText className="text-sm font-medium">
              Explore our gallery of inspiring examples
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-4 stroke-neutral-500 transition-transform
       duration-300 ease-in-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </motion.div>
        </Link>
        <div className="text-lg pt-6">or watch our demo video below</div>
      </div>

      <motion.div
        className="flex flex-col justify-center items-center z-40"
        initial="offscreen"
        animate={isInView ? "onscreen" : "offscreen"}
        variants={videoVariants}
      >
        <HeroVideoDialog
          className="block dark:hidden w-full md:w-3/4 lg:w-1/2"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="FrameIt product demonstration video"
        />
        <HeroVideoDialog
          className="hidden dark:block w-full md:w-3/4 lg:w-1/2"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="FrameIt product demonstration video"
        />
      </motion.div>
    </div>
  );
}
