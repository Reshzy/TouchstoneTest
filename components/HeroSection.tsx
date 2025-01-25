import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="relative bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>{" "}
                <span className="block text-primary-foreground xl:inline">Touchstone</span>
              </h1>
              <p className="mt-3 text-base text-primary-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Your trusted university publication delivering real stories, insights, and news.
              </p>
              <p className="mt-3 text-base text-primary-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-semibold">
                We Reveal What is Real
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="#articles"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Read Articles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="#get-involved"
                    className="btn-9 w-full flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-primary hover:text-primary hover:bg-transparent transition-all duration-300 md:py-4 md:text-lg md:px-10 relative overflow-hidden"
                  >
                    Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/hero/hero.png"
          alt="University campus"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  )
}

export default HeroSection

