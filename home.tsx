import MovieCarousel from "@/components/movie/movie-carousel"
import { Button } from "@/components/ui/button"
import { Info, Play } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen pb-8">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative h-full flex flex-col justify-end p-6 md:p-12 max-w-screen-xl mx-auto">
          <div className="slide-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Dune: Part Two</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">97% Match</span>
              <span>2024</span>
              <span>PG-13</span>
              <span>2h 46m</span>
            </div>

            <p className="text-gray-200 mb-6 max-w-2xl">
              Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who
              destroyed his family.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5 fill-white" /> Play
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/movie/1">
                  <Info className="h-5 w-5" /> More Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Carousels */}
      <div className="space-y-8 px-4 md:px-8">
        <MovieCarousel title="Trending Now" />
        <MovieCarousel title="New Releases" />
        <MovieCarousel title="Top Rated" />
        <MovieCarousel title="Action & Adventure" />
        <MovieCarousel title="Sci-Fi & Fantasy" />
      </div>
    </div>
  )
}

