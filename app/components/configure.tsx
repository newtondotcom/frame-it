import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MagicCard } from "@/components/ui/magic-card";
import { useEffect, useState } from "react";

const frameSizes = [
  {
    title: '3.5" Compact Frame',
    description: "Perfect for desktops and small spaces",
  },
  {
    title: '5" Medium Frame',
    description: "Ideal for bedside tables and shelves",
  },
  {
    title: '7" Large Frame',
    description: "Makes a statement on walls and mantels",
  },
];

const displayTypes = [
  {
    title: "Classic Black & White",
    description: "Elegant, high-contrast display with 16 grayscale levels",
  },
  {
    title: "Vibrant Color Display",
    description: "Full-spectrum E-Ink technology with rich, paper-like colors",
  },
];

const frameColors = [
  {
    title: "Sleek Black",
    description: "Modern aesthetic that complements any décor",
  },
  {
    title: "Minimalist White",
    description: "Clean, bright finish for contemporary spaces",
  },
  {
    title: "Natural Wood",
    description: "Warm, organic texture with unique grain patterns",
  },
];

function OptionCarousel({
  title,
  items,
  id,
}: {
  title: string;
  items: { title: string; description: string }[];
  id: string;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme on component mount
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    // Set up observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto">
      <h2 className="text-xl font-bold text-center mb-4" id={id}>
        {title}
      </h2>
      <Carousel className="w-full" aria-labelledby={id}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <MagicCard
                    gradientColor={isDarkMode ? "#262626" : "#D9D9D955"}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <span className="text-lg font-medium mt-2">
                        {item.title}
                      </span>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </MagicCard>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="View previous option" />
        <CarouselNext aria-label="View next option" />
      </Carousel>
    </div>
  );
}

export default function Configure() {
  return (
    <div className="flex flex-col gap-8">
      <OptionCarousel
        title="Frame Size"
        items={frameSizes}
        id="frame-size-options"
      />
      <OptionCarousel
        title="Display Type"
        items={displayTypes}
        id="display-type-options"
      />
      <OptionCarousel
        title="Frame Color"
        items={frameColors}
        id="frame-color-options"
      />
    </div>
  );
}
