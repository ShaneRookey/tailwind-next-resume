"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


useEffect(() => {
    setMounted(true);
}, []);


if (!mounted) {
    return null;
}


return (
    <a
        className='cursor-pointer text-xl dark:text-teal-700'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        <BsFillMoonStarsFill />
    </a>
);
};