import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/what-we-do")({
  component: WhatWeDo,
})

function WhatWeDo() {
  return (
    <section className="min-h-screen bg-background px-6 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">What we do</h1>
        <p className="text-white/70 text-lg">
          We design, build, and scale digital products that help businesses grow.
        </p>
      </div>
    </section>
  )
}