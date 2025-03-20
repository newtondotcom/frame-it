import { RainbowButton } from "@/components/ui/rainbow-button";
import Footer from "@/components/layout/footer";

export default function Convinced() {
  return (
    <div className="min-w-full container px-4 md:px-6 justify-between flex flex-col h-full">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Convinced ?
          </h2>
        </div>
        <div className="flex flex-col mx-auto max-w-5xl py-12 items-center">
          <RainbowButton>Buy it</RainbowButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
