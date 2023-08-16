'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const PAGES = ["home", "resume", "fun"]

function Dropdown() {
    const [ selection, setSelection ] = useState();
    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (e) => {
        setSelection(e.target.text);
        setIsOpen(false)
    }

    useEffect(() => {
        if (selection && !window.location.pathname.includes(selection)) {
            setSelection(selection);
            return;
        }
        if (!selection && !window.location.pathname) {
            setSelection("home")
            return;
        }
        setSelection(window.location.pathname.replace("/", ""))
    }, [selection]);

    return ( 
        <div className="">
            <button className='hover:shadow-xl shadow shadow-gray-800 bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 rounded-md ml-8 w-40' onClick={handleOpen}>
                {selection ? selection.toLocaleUpperCase() : "HOME"}
            </button>
            {isOpen ? 
                <ul className="absolute">
                    {PAGES.map((page, index) => {
                        return page.toLocaleLowerCase() != selection?.toLocaleLowerCase() ?
                            <li key={index} className="hover:shadow-xl shadow shadow-gray-800 bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 text-center ml-8 rounded-md w-40 m-2">
                                <Link onClick={handleClick} href={`/${page}`}>
                                    {page.toLocaleUpperCase()}
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