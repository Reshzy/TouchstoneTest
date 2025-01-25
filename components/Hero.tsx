import React from 'react';
import Link from "next/link"

const Hero = () => {
    return (
        <div className="bg-maroon-700 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-center">
                    Welcome to Touchstone
                </h1>
                <p className="mt-6 text-xl max-w-3xl mx-auto text-center">
                    Your trusted university publication delivering real stories, insights, and news.
                </p>
                <p className="mt-2 text-2xl font-semibold text-center">We Reveal What is Real.</p>
                <div className="mt-10 flex justify-center space-x-4">
                    <Link
                        href="#articles"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-maroon-700 bg-white hover:bg-maroon-50 transition duration-150 ease-in-out"
                    >
                        Read Articles
                    </Link>
                    <Link
                        href="#get-involved"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maroon-600 hover:bg-maroon-500 transition duration-150 ease-in-out"
                    >
                        Get Involved
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero

