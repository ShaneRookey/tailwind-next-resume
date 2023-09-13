'use client'
import Link from "next/link";
import { useState } from "react";

const PAGES = ["home", "resume", "fun"]

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    
    return ( 
        <div>
            <button
                className='hover:shadow-xl shadow shadow-gray-800 bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 rounded-md ml-8 w-40 mb-2'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "CLOSE" : "MENU"}
            </button>
            {isOpen ? 
                <ul className="absolute">
                    {PAGES.map((page, index) => {
                        return (
                            <button
                                key={index}
                                className='hover:shadow-xl shadow shadow-gray-800 bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 rounded-md ml-8 w-40 m-2'
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <Link href={`/${page}`}>
                                    {page.toUpperCase()}
                                </Link>
                            </button>
                        )}
                    )}
                </ul>
                : undefined
            } 
        </div>
    );
}

export default Dropdown;