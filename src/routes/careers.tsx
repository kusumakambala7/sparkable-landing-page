import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/careers")({
  component: Careers,
})

function Careers() {
  return (
    <section className="min-h-screen bg-background px-6 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-5xl font-bold">Careers</h1>

        <p className="mb-10 text-lg leading-relaxed text-white/70">
          Want to work on impactful products with a fast-moving team?
          We’re always looking for passionate builders and thinkers.
        </p>

        <Button className="bg-purple-600 hover:bg-purple-500">
          View Open Positions
        </Button>
      </div>
    </section>
  )
}