'use client'
import Link from "next/link";
import { useState } from "react";

const PAGES = ["home", "resume", "fun", "beta"]

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");
    
    return ( 
        <div>
            <button
                className='hover:shadow-xl shadow shadow-gray-800 bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 rounded-md ml-8 w-40 mb-2'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "CLOSE" : "MENU"}
            </button>
            {isOpen ? 
                <ul className="absolute z-50">
                    {PAGES.map((page, index) => {
                        return page === currentPage ? 
                            undefined : 
                            <Link key={index} href={page == "home" ? '/' : `/${page}`}>
                                <button
                                    className='hover:shadow-xl shadow shadow-gray-800 bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 rounded-md ml-8 w-40 m-2'
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setCurrentPage(page);
                                    }}
                                >
                                    {page.toUpperCase()}
                                </button>
                            </Link>
                    })}
                </ul>
                : undefined
            } 
        </div>
    );
}

export default Dropdown;