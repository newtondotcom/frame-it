import { useInView } from "motion/react";
import { Images, TvIcon as TvMinimal, Rainbow, ShieldPlus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/ui/bento-elements/beam";
import { AnimatedListDemo } from "@/components/ui/bento-elements/list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { useRef } from "react";

const files = [
  {
    name: "family-vacation.jpg",
    body: "Relive your favorite family moments with stunning clarity and color that's gentle on the eyes.",
  },
  {
    name: "anniversary.jpg",
    body: "Special occasions deserve special displays. Share your most precious memories in a format that lasts.",
  },
  {
    name: "grandkids.jpg",
    body: "Keep your loved ones close, even when they're far away. Perfect for sharing growing moments with family.",
  },
  {
    name: "wedding-album.jpg",
    body: "Your most cherished memories deserve to be displayed with the elegance and permanence of FrameIt.",
  },
  {
    name: "holiday-memories.jpg",
    body: "Seasonal joy that changes with you. Easily update your display to match the moment or mood.",
  },
];

const cardVariants = {
  topLeft: {
    offscreen: {
      opacity: 0,
      x: -50,
      y: -50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
  topRight: {
    offscreen: {
      opacity: 0,
      x: 50,
      y: -50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
  bottomLeft: {
    offscreen: {
      opacity: 0,
      x: -50,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
  bottomRight: {
    offscreen: {
      opacity: 0,
      x: 50,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
};

const features = [
  {
    Icon: Images,
    name: "Stunning Photo Gallery",
    description:
      "Display your memories in vivid color with our advanced E-Ink technology that's gentle on the eyes and uses minimal power.",
    href: "#",
    cta: "Explore gallery features",
    className: "col-span-3 lg:col-span-1",
    cardVariants: cardVariants.topLeft, // Top-left animation
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        aria-hidden="true"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Rainbow,
    name: "Seamless Family Connection",
    description:
      "Bridge generations with a simple, elegant display that keeps elderly family members connected through a continuous stream of updated family photos.",
    href: "#",
    cta: "Learn about sharing",
    className: "col-span-3 lg:col-span-2",
    cardVariants: cardVariants.topRight, // Top-right animation
    background: (
      <AnimatedListDemo
        className="absolute right-2 top-4 h-[250px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
        aria-hidden="true"
      />
    ),
  },
  {
    Icon: TvMinimal,
    name: "Versatile Content Display",
    description:
      "Beyond photos, showcase weather updates, calendar events, news headlines, and personalized messages—all with the eye comfort of E-Ink technology.",
    href: "#",
    cta: "Discover content options",
    className: "col-span-3 lg:col-span-2",
    cardVariants: cardVariants.bottomLeft, // Bottom-left animation
    background: (
      <AnimatedBeamMultipleOutputDemo
        className="absolute right-2 top-4 h-[250px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
        aria-hidden="true"
      />
    ),
  },
  {
    Icon: ShieldPlus,
    name: "Bank-Level Security",
    description:
      "Your memories deserve protection. All content is end-to-end encrypted before transmission to your Frame, ensuring complete privacy and security.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Explore security features",
    cardVariants: cardVariants.bottomRight, // Bottom-right animation
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
        aria-hidden="true"
      />
    ),
  },
];

export function Bento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });

  return (
    <div ref={ref}>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard {...feature} key={idx} isInView={isInView} />
        ))}
      </BentoGrid>
    </div>
  );
}
