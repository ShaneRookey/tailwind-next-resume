import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function Darkmode() {
    const { theme, setTheme } = useTheme();
    
return (
    <a
        className='hover:shadow shadow-black cursor-pointer text-xl text-teal-800 dark:text-white'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        <BsFillMoonStarsFill />
    </a>
);
};