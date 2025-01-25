import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "The Future of Online Learning",
    excerpt: "Exploring the impact of technology on education and the classroom experience.",
    image: "/placeholder.svg",
    author: "Jane Doe",
    date: "May 1, 2023",
  },
  {
    title: "Student-Led Initiatives Making a Difference",
    excerpt: "How student organizations are driving positive change on campus and beyond.",
    image: "/placeholder.svg",
    author: "John Smith",
    date: "April 28, 2023",
  },
  {
    title: "The Art of Balancing Academics and Extracurriculars",
    excerpt: "Tips and strategies for managing your time effectively as a student.",
    image: "/placeholder.svg",
    author: "Emily Johnson",
    date: "April 25, 2023",
  },
]

const LatestArticlesSection = () => {
  return (
    <section id="articles" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Latest Articles</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Stay Informed and Inspired
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover our most recent and impactful stories from around the campus.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-x-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={384}
                  height={192}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    <Link href="#" className="hover:underline">
                      Article
                    </Link>
                  </p>
                  <Link href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                    <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{article.author}</span>
                    <Image className="h-10 w-10 rounded-full" src="/placeholder.svg" alt="" width={40} height={40} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link href="#" className="hover:underline">
                        {article.author}
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.date}>{article.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-foreground transition-colors duration-200"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestArticlesSection

