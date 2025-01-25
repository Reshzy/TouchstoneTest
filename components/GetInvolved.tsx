import React from 'react';
import Link from "next/link"

const GetInvolved = () => {
    return (
        <section id="get-involved" className="py-16 bg-maroon-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold sm:text-4xl text-center">Get Involved</h2>
                <div className="mt-8 text-xl">
                    <p>
                        Touchstone is always looking for passionate students to join our team. Whether you're a writer, editor,
                        photographer, or artist, there's a place for you here.
                    </p>
                    <h3 className="mt-8 text-2xl font-semibold">How to Join:</h3>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                        <li>Apply to be a writer, editor, or photographer</li>
                        <li>Submit your articles, poems, or artwork for publication</li>
                        <li>Attend our weekly meetings to pitch ideas and collaborate</li>
                    </ul>
                    <div className="mt-10">
                        <Link
                            href="#"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-maroon-700 bg-white hover:bg-maroon-50"
                        >
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInvolved

