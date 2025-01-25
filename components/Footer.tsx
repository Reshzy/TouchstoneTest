import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white">
                            Touchstone
                        </Link>
                        <p className="text-gray-300 text-base">
                            Your trusted university publication delivering real stories, insights, and news.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigation</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link
                                            href="#about"
                                            className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#features"
                                            className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#articles"
                                            className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            Articles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#get-involved"
                                            className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            Get Involved
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#contact"
                                            className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                                            Terms of Service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Touchstone. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

