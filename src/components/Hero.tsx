import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white pt-24">

      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-fuchsia-500/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-6 py-32 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-[72px] font-extrabold leading-[1.05] tracking-tight md:text-[110px]">
            <span className="block">SPARK</span>
            <span className="block">SCALE</span>
            <span className="block">SUCCESS</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-white/70">
            We help ambitious teams ignite ideas, scale faster, and build
            meaningful digital products that stand out.
          </p>

          <div className="mt-12 flex gap-4">
            <Button
              size="lg"
              className="gap-2 bg-purple-600 hover:bg-purple-500"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="border border-white/20 text-white/80 hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE — ATTRACTIVE CONTENT */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <span className="mb-4 block h-[2px] w-12 bg-purple-500" />

            <h3 className="text-2xl font-semibold">
              Shaping tomorrow, today
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              In a world of constant change, reinvention is essential.
              Sparkable partners with forward-thinking teams to rewrite
              the rules of growth, innovation, and resilience.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300">
              See what we do <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
