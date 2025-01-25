import { Newspaper, PenTool, Trophy } from "lucide-react"

const features = [
  {
    name: "Campus News",
    description: "Stay informed with the latest university events and announcements.",
    icon: Newspaper,
  },
  {
    name: "Creative Columns",
    description: "Explore student opinions, poems, and creative works.",
    icon: PenTool,
  },
  {
    name: "Student Highlights",
    description: "Celebrate student achievements and success stories.",
    icon: Trophy,
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Makes Touchstone Unique
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the diverse content and opportunities Touchstone offers to our university community.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

