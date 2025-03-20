import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown} from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { Link } from "react-router";

export default function Welcome(){
    return(
    <>
    <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Redefining Digital Frames with E-Ink Technology
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Low power, always-on display that brings your memories to
            life with the comfort of paper-like viewing.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link to="/preorder">
            <Button size="lg">
              Preorder Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="#waitlist">
            <Button size="lg" variant="outline">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center space-y-4">
      You thought that E-Ink was only black in white, as in your ereader ? Well, we thought so...
      <h2>but it has colors</h2>
      Scroll down to discover our site with colors.
      <ChevronsDown size={36}  />
    </div>
  </div>
  <div className="flex flex-col w-full items-center pt-12">
    <HeroVideoDialog
      className="block dark:hidden w-1/2"
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
      thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
      thumbnailAlt="Hero Video"
    />
    <HeroVideoDialog
      className="hidden dark:block w-1/2"
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
      thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
      thumbnailAlt="Hero Video"
    />
  </div>
  </>
    );
}