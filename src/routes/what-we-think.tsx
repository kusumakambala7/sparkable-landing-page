import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/what-we-think")({
  component: WhatWeThink,
})

function WhatWeThink() {
  return (
    <section className="min-h-screen px-6 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">What We Think</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          We believe great products are built at the intersection
          of strategy, design, and engineering.
          Our thinking is driven by clarity, curiosity, and impact.
        </p>
      </div>
    </section>
  )
}

