import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import FeaturesSection from "../components/FeaturesSection"
import LatestArticlesSection from "../components/LatestArticlesSection"
import GetInvolvedSection from "../components/GetInvolvedSection"
import ContactSection from "../components/ContactSection"
import NewsCarousel from "../components/NewsCarousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <NewsCarousel />
        <LatestArticlesSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

