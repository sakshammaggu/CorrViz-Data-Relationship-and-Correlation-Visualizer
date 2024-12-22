"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePageHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
        <header className="bg-gray-950 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <div className="flex items-center space-x-2">
                    {/* <Image
                        src="/frontend/public/images/projectLogo.png" 
                        alt="CorrViz Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    /> */}
                    
                    <span className="text-2xl font-bold text-purple-400">
                        CorrViz
                    </span>
                </div>

                <nav className="hidden md:flex space-x-6">
                    <Link
                        href="/home"
                        className="text-lg font-medium hover:text-purple-400 transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="text-lg font-medium hover:text-purple-400 transition duration-300"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="text-lg font-medium hover:text-purple-400 transition duration-300"
                    >
                        Contact Us
                    </Link>
                </nav>

                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={toggleSidebar}
                        className="text-purple-400 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                        </svg>
                    </button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 z-40 flex">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={toggleSidebar}
                    ></div>

                    <div className="ml-auto w-64 bg-gray-900 h-full shadow-lg p-6 relative">
                        <button
                            type="button"
                            onClick={toggleSidebar}
                            className="text-white mb-6 absolute top-4 right-4 focus:outline-none"
                            aria-label="Close sidebar"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <nav className="space-y-4">
                            <Link
                                href="/home"
                                className="block text-lg font-medium text-white hover:text-purple-400 transition duration-300"
                            >
                                Home
                            </Link>

                            <Link
                                href="/about"
                                className="block text-lg font-medium text-white hover:text-purple-400 transition duration-300"
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                className="block text-lg font-medium text-white hover:text-purple-400 transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}