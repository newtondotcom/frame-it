import React from "react"
import { cn } from "@/lib/utils"

interface RainbowTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const RainbowText = React.forwardRef<HTMLSpanElement, RainbowTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-block animate-rainbow bg-clip-text text-transparent",
          // Gradient background for the rainbow effect
          "bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          className,
        )}
        {...props}
      >
        {children}
      </span>
    )
  },
)

RainbowText.displayName = "RainbowText"

