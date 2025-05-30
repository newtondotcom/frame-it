import Configure from "@/components/configure";

export default function Specs() {
  return (
    <div className="min-w-full container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            id="specs-heading"
          >
            Tailored to Your Space
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Customize your FrameIt with multiple sizes, display types, and
            finishes to perfectly complement your home décor
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-5xl py-12 items-center">
        <Configure />
      </div>
    </div>
  );
}
