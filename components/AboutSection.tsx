import { Zap, Target } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission and Vision
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Touchstone represents the voice of our university community, dedicated to delivering authentic, impactful
            stories that matter to our readers.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Zap className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Vision</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                To be the premier source of information and inspiration for our university community, fostering dialogue
                and promoting positive change.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Impact</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Through our dedication to journalistic integrity and student empowerment, we aim to shape the narrative
                of our university and beyond.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

