import { useInView } from "motion/react";
import { Images, TvMinimal, Rainbow, ShieldPlus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/ui/bento-elements/beam";
import { AnimatedListDemo } from "@/components/ui/bento-elements/list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { useRef } from "react";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
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
    name: "Photo Gallery",
    description: "Display your favorite memories.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    cardVariants: cardVariants.topLeft, // Top-left animation
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
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
    name: "Share your photo gallery",
    description:
      "Help elderly family members stay connected with slideshow of family photos",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    cardVariants: cardVariants.topRight, // Top-right animation
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[250px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: TvMinimal,
    name: "Display lots of things",
    description: "Supports lots of contents, like images, weather or news.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    cardVariants: cardVariants.bottomLeft, // Bottom-left animation
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[250px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: ShieldPlus,
    name: "Secure Communication",
    description:
      "All of your datas are encrypted before being sent to your Frame for a better protection",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    cardVariants: cardVariants.bottomRight, // Bottom-right animation
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
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
