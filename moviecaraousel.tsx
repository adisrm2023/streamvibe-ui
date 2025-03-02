"use client"

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import MovieCard from "./movie-card"

interface MovieCarouselProps {
  title: string
  className?: string
}

export default function MovieCarousel({ title, className }: MovieCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Generate 10 dummy movies for the carousel
  const movies = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    year: 2024 - Math.floor(Math.random() * 5),
    rating: Math.floor(Math.random() * 100),
  }))

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const { scrollLeft, clientWidth } = carouselRef.current
    const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75

    carouselRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    })
  }

  const handleScroll = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <div className={cn("relative group", className)}>
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>

      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 z-10 bg-background/80 rounded-full p-1 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 top-1/2 z-10 bg-background/80 rounded-full p-1 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Movie Cards */}
      <div ref={carouselRef} className="flex gap-4 overflow-x-auto pb-4 movie-carousel" onScroll={handleScroll}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} year={movie.year} rating={movie.rating} />
        ))}
      </div>
    </div>
  )
}

