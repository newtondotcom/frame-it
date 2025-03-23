import { RainbowButton } from "@/components/ui/rainbow-button";
import Footer from "@/components/layout/footer";
import { Link } from "react-router";

export default function Convinced() {
  return (
    <div className="min-w-full container px-4 md:px-6 justify-between flex flex-col h-full">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            id="convinced-heading"
          >
            Ready to Transform Your Memories?
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
            Join the revolution in digital displays that combines cutting-edge
            technology with the timeless comfort of paper.
          </p>
        </div>
        <div className="flex flex-col mx-auto max-w-5xl py-12 items-center">
          <Link to={"/buy"}>
            <RainbowButton aria-label="Purchase FrameIt">
              Experience FrameIt
            </RainbowButton>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
