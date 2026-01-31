import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import "../styles.css"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sparkable — Spark. Scale. Success." },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
