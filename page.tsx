import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0"></div>

      {/* Content */}
      <div className="z-10 text-center max-w-md mx-auto slide-up">
        <div className="mb-8 flex items-center justify-center">
          <div className="bg-primary rounded-lg p-3 inline-flex">
            <Play className="h-8 w-8 fill-white text-white" />
          </div>
          <h1 className="text-3xl font-bold ml-2">StreamVibe</h1>
        </div>

        <h2 className="text-4xl font-bold mb-4">Unlimited movies, TV shows, and more.</h2>
        <p className="text-lg mb-8 text-gray-300">
          Watch anywhere. Cancel anytime. Ready to watch? Sign in or create an account.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </div>

      {/* Floating movie posters in background */}
      <div className="absolute -bottom-16 -left-16 w-40 h-60 bg-[url('/placeholder.svg?height=240&width=160')] rounded-lg rotate-12 opacity-40"></div>
      <div className="absolute -top-8 -right-8 w-40 h-60 bg-[url('/placeholder.svg?height=240&width=160')] rounded-lg -rotate-12 opacity-40"></div>
      <div className="absolute bottom-20 right-4 w-32 h-48 bg-[url('/placeholder.svg?height=192&width=128')] rounded-lg rotate-6 opacity-30"></div>
    </div>
  )
}

page
