"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { Edit, LogOut, Moon, Sun } from "lucide-react"
import MovieCard from "@/components/movie/movie-card"

export default function ProfilePage() {
  const { theme, setTheme } = useTheme()

  // Generate dummy watchlist
  const watchlist = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    year: 2024 - Math.floor(Math.random() * 5),
    rating: Math.floor(Math.random() * 100),
  }))

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="relative">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2">
              <Edit className="h-4 w-4" />
            </button>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">john.doe@example.com</p>
            <p className="text-sm text-muted-foreground mt-1">Member since January 2024</p>
          </div>

          <div className="flex items-center gap-2 ml-auto mt-4 md:mt-0">
            <Sun className="h-4 w-4" />
            <Switch checked={theme === "dark"} onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
            <Moon className="h-4 w-4" />
          </div>
        </div>

        <Tabs defaultValue="watchlist" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="watchlist">My Watchlist</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="watchlist" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">My Watchlist</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {watchlist.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} title={movie.title} year={movie.year} rating={movie.rating} />
              ))}
            </div>

            {watchlist.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Your watchlist is empty</p>
                <Button className="mt-4">Browse Movies</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-xl font-medium">Account Settings</h2>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" defaultValue="********" />
              </div>

              <Button>Save Changes</Button>
            </div>

            <div className="pt-6 border-t">
              <Button variant="destructive" className="gap-2">
                <LogOut className="h-4 w-4" /> Sign Out
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <h2 className="text-xl font-medium">Preferences</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={theme === "dark"}
                  onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about new releases</p>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoplay">Autoplay</Label>
                  <p className="text-sm text-muted-foreground">Automatically play next episode</p>
                </div>
                <Switch id="autoplay" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="subtitles">Default Subtitles</Label>
                  <p className="text-sm text-muted-foreground">Always show subtitles</p>
                </div>
                <Switch id="subtitles" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="data-saver">Data Saver</Label>
                  <p className="text-sm text-muted-foreground">Reduce data usage when streaming</p>
                </div>
                <Switch id="data-saver" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

