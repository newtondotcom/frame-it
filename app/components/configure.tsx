import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MagicCard } from "@/components/ui/magic-card";

const frameSizes = [
  { title: '3.5" Compact Frame' },
  { title: '5" Medium Frame' },
  { title: '7" Large Frame' },
];

const displayTypes = [
  { title: "Black & White Display" },
  { title: "Color Display" },
];

const frameColors = [{ title: "Black" }, { title: "White" }, { title: "Wood" }];

function OptionCarousel({
  title,
  items,
}: {
  title: string;
  items: { title: string }[];
}) {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  return (
    <div className="w-full max-w-xs mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <MagicCard
                    gradientColor={
                      darkThemeMq.matches ? "#262626" : "#D9D9D955"
                    }
                  >
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <span className="text-lg font-medium mt-2">
                        {item.title}
                      </span>
                    </CardContent>
                  </MagicCard>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default function Configure() {
  return (
    <div className="flex flex-col gap-8">
      <OptionCarousel title="Frame Size" items={frameSizes} />
      <OptionCarousel title="Display Type" items={displayTypes} />
      <OptionCarousel title="Frame Color" items={frameColors} />
    </div>
  );
}
