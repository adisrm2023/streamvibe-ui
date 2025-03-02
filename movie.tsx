import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import MovieCarousel from "@/components/movie/movie-carousel"
import { Bookmark, Play, Star, ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function MovieDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch movie details based on the ID
  const movieId = params.id

  return (
    <div className="min-h-screen">
      {/* Hero Section with Movie Poster */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Movie Poster" fill className="object-cover" priority />
        <div className="absolute inset-0 hero-overlay"></div>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button size="lg" className="gap-2">
            <Play className="h-5 w-5 fill-white" /> Play Trailer
          </Button>
        </div>
      </div>

      {/* Movie Details */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 -mt-20 relative z-10">
        <div className="bg-background rounded-t-xl p-6 md:p-8 border border-border">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Movie Poster (Mobile) */}
            <div className="md:hidden w-full max-w-[200px] mx-auto">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Movie Poster"
                width={200}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Movie Poster (Desktop) */}
            <div className="hidden md:block flex-shrink-0">
              <Image
                src="/placeholder.svg?height=450&width=300"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Movie Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Dune: Part Two</h1>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="outline">2024</Badge>
                <Badge variant="outline">PG-13</Badge>
                <Badge variant="outline">2h 46m</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>8.7/10</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Sci-Fi</Badge>
                <Badge>Adventure</Badge>
                <Badge>Drama</Badge>
                <Badge>Action</Badge>
              </div>

              <p className="text-muted-foreground mb-6">
                Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who
                destroyed his family. As he begins to fulfill the Fremen prophecy, he must choose between the love of
                his life and the fate of the universe.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="gap-2">
                  <Play className="h-4 w-4 fill-white" /> Play
                </Button>
                <Button variant="outline" className="gap-2">
                  <Bookmark className="h-4 w-4" /> Add to Watchlist
                </Button>
                <Button variant="outline" size="icon">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Director</h3>
                <p>Denis Villeneuve</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Writers</h3>
                <p>Jon Spaihts, Denis Villeneuve, Frank Herbert</p>
              </div>
            </div>
          </div>

          {/* Cast Section */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Cast</h2>
              <Button variant="link">See All</Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 md:h-24 md:w-24 mb-2">
                    <AvatarImage src={`/placeholder.svg?height=96&width=96`} alt={`Actor ${i + 1}`} />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <h4 className="font-medium text-sm">Actor Name</h4>
                  <p className="text-xs text-muted-foreground">Character</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Movies */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8 pb-8">
        <MovieCarousel title="More Like This" />
      </div>
    </div>
  )
}

