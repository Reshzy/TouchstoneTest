import React from 'react';
import { Newspaper, PenTool, Trophy } from "lucide-react"

const features = [
    {
        name: "Campus News",
        description: "Covering the latest university events and announcements.",
        icon: Newspaper,
    },
    {
        name: "Creative Columns",
        description: "Showcasing student opinions, poems, and creative works.",
        icon: PenTool,
    },
    {
        name: "Student Highlights",
        description: "Celebrating student achievements and success stories.",
        icon: Trophy,
    },
]

const Features = () => {
    return (
        <section id="features" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">Our Features</h2>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                                    {" "}
                                    {/* Added shadow-md */}
                                    <div className="-mt-6">
                                        <div className="flex justify-center">
                                            {" "}
                                            {/* Added flex and justify-center */}
                                            <span className="inline-flex items-center justify-center p-3 bg-maroon-500 rounded-md shadow-lg">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">
                                            {" "}
                                            {/* Added text-center */} {feature.name}
                                        </h3>
                                        <p className="mt-5 text-base text-gray-500 text-center">
                                            {" "}
                                            {/* Added text-center */} {feature.description}
                                        </p>
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

export default Features

