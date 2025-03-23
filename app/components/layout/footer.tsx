import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">© 2024 FrameIt. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6" aria-label="Footer navigation">
        <Link to="#" className="text-xs hover:underline underline-offset-4" aria-label="Terms of Service (coming soon)">
          Terms of Service (upcoming)
        </Link>
        <Link to="#" className="text-xs hover:underline underline-offset-4" aria-label="Privacy Policy (coming soon)">
          Privacy (upcoming)
        </Link>
      </nav>
    </footer>
  )
}

