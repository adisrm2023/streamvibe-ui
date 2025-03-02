"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import MovieCard from "@/components/movie/movie-card"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Generate dummy search results
  const searchResults = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    year: 2024 - Math.floor(Math.random() * 5),
    rating: Math.floor(Math.random() * 100),
  }))

  return (
    <div className="min-h-screen p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Search</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search movies, TV shows..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4 p-4 border rounded-lg">
            <h3 className="font-medium">Filters</h3>

            <div className="space-y-2">
              <Label htmlFor="genre">Genre</Label>
              <Select defaultValue="all">
                <SelectTrigger id="genre">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="scifi">Sci-Fi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Release Year</Label>
              <Select defaultValue="all">
                <SelectTrigger id="year">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Rating</Label>
                <span className="text-sm text-muted-foreground">7.5+</span>
              </div>
              <Slider defaultValue={[7.5]} min={0} max={10} step={0.1} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sort">Sort By</Label>
              <Select defaultValue="popularity">
                <SelectTrigger id="sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>

        {/* Search Results */}
        <div className="flex-1">
          <h2 className="text-xl font-medium mb-4">
            {searchQuery ? `Results for "${searchQuery}"` : "Popular Searches"}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} id={movie.id} title={movie.title} year={movie.year} rating={movie.rating} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

