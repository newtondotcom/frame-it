import { Link } from "react-router";
import { useState } from "react";
import ThemeToggle from "@/components/color-mode";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { RainbowHeader } from "@/components/ui/rainbow-header";

export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
      setMobileMenuOpen((prev) => !prev);
    };
    const [isRainbow, setIsRainbow] = useState(false);
    return (
      <>
        <RainbowHeader isRainbow={isRainbow}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl">FrameIt</span>
        </div>

        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link
            to="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            to="#specs"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Specs
          </Link>
          <Link
            to="#content"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contents
          </Link>
          <Link
            to="#waitlist"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Waitlist
          </Link>
        </nav>

        <ThemeToggle />

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </RainbowHeader>

      {mobileMenuOpen && (
        <nav className="fixed top-16 left-0 w-full md:hidden flex flex-col gap-4 p-4 border-b bg-white shadow-md">
          <Link
            to="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Features
          </Link>
          <Link
            to="#specs"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Specs
          </Link>
          <Link
            to="#content"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Contents
          </Link>
          <Link
            to="#waitlist"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Waitlist
          </Link>
        </nav>
      )}
      </>
    )
}