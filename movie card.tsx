import { cn } from "@/lib/utils"
import { Bookmark, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface MovieCardProps {
  id: number
  title: string
  year: number
  rating: number
  className?: string
}

export default function MovieCard({ id, title, year, rating, className }: MovieCardProps) {
  return (
    <div className={cn("group relative flex-shrink-0 cursor-pointer", className)}>
      <Link href={`/movie/${id}`} className="block">
        <div className="relative w-40 h-60 md:w-48 md:h-72 overflow-hidden rounded-lg">
          <Image
            src={`/placeholder.svg?height=${72 * 4}&width=${48 * 4}`}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Play button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary rounded-full p-3">
              <Play className="h-6 w-6 fill-white text-white" />
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute top-2 left-2 bg-primary/90 text-white text-xs px-2 py-1 rounded">{rating}%</div>

          {/* Bookmark button */}
          <button className="absolute top-2 right-2 bg-background/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary">
            <Bookmark className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-2">
          <h3 className="text-sm font-medium truncate">{title}</h3>
          <p className="text-xs text-muted-foreground">{year}</p>
        </div>
      </Link>
    </div>
  )
}

