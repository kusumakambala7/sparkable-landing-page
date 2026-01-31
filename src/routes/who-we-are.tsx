import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/who-we-are")({
  component: WhoWeAre,
})

function WhoWeAre() {
  return (
    <section className="min-h-screen px-6 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Sparkable is a collective of designers, engineers,
          and strategists passionate about building meaningful
          digital experiences. We value ownership, curiosity,
          and continuous growth.
        </p>
      </div>
    </section>
  )
}

