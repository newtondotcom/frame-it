import WaitlistForm from "@/components/waitlist-form";

export default function Buy(){
    return (
        <div className="min-w-full px-4 py-12 md:py-24 lg:py-32">
        <div className="z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <h2 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-amber-400 to-yellow-300/20">
            Unfortunately, we are not there yet, but ...
          </h2>
        </div>
        <div className="min-w-full container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be the first to know when FrameIt is available for purchase
              </p>
            </div>
            <div className="w-full max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    )
}