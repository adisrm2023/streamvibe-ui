import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Play } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0"></div>

      <div className="w-full max-w-md z-10 fade-in">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center">
            <div className="bg-primary rounded-lg p-2 inline-flex">
              <Play className="h-6 w-6 fill-white text-white" />
            </div>
            <h1 className="text-2xl font-bold ml-2">StreamVibe</h1>
          </Link>
        </div>

        <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your full name" required className="bg-background/50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required className="bg-background/50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                required
                className="bg-background/50"
              />
            </div>

            <Button type="submit" className="w-full" asChild>
              <Link href="/home">Create Account</Link>
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

