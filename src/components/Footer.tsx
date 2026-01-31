import { Link } from "@tanstack/react-router"

export function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Spark<span className="text-purple-500">able</span>
            </h3>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              We help ambitious teams ignite ideas, scale faster, and build
              meaningful digital products that stand out.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white">Who we are</Link></li>
              <li><Link to="/" className="hover:text-white">Careers</Link></li>
              <li><Link to="/" className="hover:text-white">What we think</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white">Product Design</Link></li>
              <li><Link to="/" className="hover:text-white">Engineering</Link></li>
              <li><Link to="/" className="hover:text-white">Digital Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>hello@sparkable.com</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <span>
            © {new Date().getFullYear()} Sparkable. All rights reserved.
          </span>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">Privacy</Link>
            <Link to="/" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
