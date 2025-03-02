import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WatchlistPage() {
  // Generate dummy watchlist
  const watchlist = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    year: 2024 - Math.floor(Math.random() * 5),
    rating: Math.floor(Math.random() * 100),
    genre: ["Action", "Drama", "Comedy", "Sci-Fi", "Horror"][Math.floor(Math.random() * 5)],
    duration: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
  }))

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">My Watchlist</h1>
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" /> Manage
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full mb-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="shows">TV Shows</TabsTrigger>
            <TabsTrigger value="watched">Watched</TabsTrigger>
          </TabsList>
        </Tabs>

        {watchlist.length > 0 ? (
          <div className="space-y-4">
            {watchlist.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="relative w-full sm:w-48 h-28 sm:h-auto flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=168&width=288`}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="sm" className="gap-1">
                      <Play className="h-4 w-4 fill-white" /> Play
                    </Button>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link href={`/movie/${item.id}`} className="hover:underline">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                    </Link>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{item.year}</span>
                      <span>•</span>
                      <span>{item.genre}</span>
                      <span>•</span>
                      <span>{item.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <Button size="sm" asChild>
                      <Link href={`/movie/${item.id}`}>Watch Now</Link>
                    </Button>
                    <Button size="sm" variant="outline">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border rounded-lg">
            <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium mb-2">Your watchlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add movies and TV shows to your watchlist to keep track of what you want to watch
            </p>
            <Button asChild>
              <Link href="/home">Browse Content</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

