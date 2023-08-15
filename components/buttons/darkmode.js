import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function Darkmode() {
    const { theme, setTheme } = useTheme();
    
return (
    <a
        className='cursor-pointer text-xl dark:text-teal-700'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        <BsFillMoonStarsFill />
    </a>
);
};