import React from "react";
import { cn } from "@/lib/utils";

interface RainbowHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {}

export const RainbowHeader = React.forwardRef<
  HTMLHeadElement,
  RainbowHeaderProps
>(({ children, className, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(
        "w-full max-w-[calc(100%-4rem)] h-16 flex items-center justify-between border border-primary bg-white/10 shadow-md z-50 px-4 lg:px-6 backdrop-blur-md rounded-3xl mx-auto",
        "group relative animate-rainbow [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08rem)_solid_transparent]",
        // light mode colors
        "bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
        // dark mode colors
        "dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
});

RainbowHeader.displayName = "RainbowHeader";
