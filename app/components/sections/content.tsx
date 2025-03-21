import { Link } from "react-router";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function Content() {
  return (
    <div className="min-w-full container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choose what to diplay
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Navigate through our app and build your{" "}
            <span className="text-primary">Frame</span> customizez content
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-5xl py-12 items-center">
        Discover mockups we have built for you <Link to="/mockups">here</Link>{" "}
        or lets us show you
      </div>

      <div className="flex flex-col justify-center items-center pt-12 z-40">
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
    </div>
  );
}
