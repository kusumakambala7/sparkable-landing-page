import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-xl font-extrabold tracking-tight text-white"
        >
          Spark<span className="text-purple-500">able</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link to="/what-we-do" className="transition hover:text-white">
            What we do
          </Link>
          <Link to="/what-we-think" className="transition hover:text-white">
            What we think
          </Link>
          <Link to="/who-we-are" className="transition hover:text-white">
            Who we are
          </Link>
          <Link to="/careers" className="transition hover:text-white">
            Careers
          </Link>
        </nav>

        {/* CTA */}
        <Button className="bg-purple-600 hover:bg-purple-500">
          Start a Project
        </Button>
      </div>
    </header>
  )
}