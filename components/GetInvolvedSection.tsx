import Link from "next/link"
import { Pen, Send, Users } from "lucide-react"

const opportunities = [
  {
    title: "Join the Team",
    description: "Become a writer, editor, or artist for Touchstone.",
    icon: Users,
    action: "Apply Now",
  },
  {
    title: "Submit Your Work",
    description: "Share your articles, poems, or creative pieces with our community.",
    icon: Pen,
    action: "Submit",
  },
  {
    title: "Pitch an Idea",
    description: "Have a great story idea? Let us know!",
    icon: Send,
    action: "Pitch",
  },
]

const GetInvolvedSection = () => {
  return (
    <section id="get-involved" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Get Involved</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Be Part of Our Story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover opportunities to contribute to Touchstone and make your mark on our university community.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {opportunities.map((item) => (
              <div key={item.title} className="relative">
                <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-4 -left-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{item.description}</p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-base font-medium text-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {item.action} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection

