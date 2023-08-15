'use client'
import Link from "next/link";
import { useState } from "react";

const PAGES = ["Home", "Resume", "Fun"]

function Dropdown() {
    const [ selection, setSelection ] = useState("Home");
    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (e) => {
        setSelection(e.target.text);
        setIsOpen(false)
    }

    return ( 
        <div>
            <button className='bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 rounded-md ml-8 w-40' onClick={handleOpen}>
                {selection ?? "Home"}
            </button>
            {isOpen ? 
                <ul className="absolute">
                    {PAGES.map((page, index) => {
                        return page != selection ?
                            <li key={index} className="bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 text-center ml-8 rounded-md w-40 m-2">
                                <Link onClick={handleClick} href={`/${page.toLocaleLowerCase()}`}>
                                    {page}
                                </Link>
                            </li>
                            : undefined
                    })}
                </ul>
                : undefined
            } 
        </div>
    );
}

export default Dropdown;