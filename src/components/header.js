import { BsFillMoonStarsFill } from "react-icons/bs";

const GOOGLE_RESUME = "https://docs.google.com/document/d/1Ms-KHGH1sKV1NIhQ2Loz6JuYThjKSQr1/edit?usp=sharing&ouid=102424025146261627677&rtpof=true&sd=true"

function Header({onDarkModeClick}) {
    return ( 
        <nav className='py-6 mb-6 flex justify-between'>
                    <h1 className='text-xl font-burtons py-2 text-teal-700 font-medium'>Shane Rookey</h1>
                    <ul className='flex items-center'>
                        <li><BsFillMoonStarsFill onClick={onDarkModeClick} className='cursor-pointer text-xl dark:text-teal-700'/></li>
                        <li>
                            <a className='bg-gradient-to-r from-teal-800 to-teal-600 text-white px-4 py-2 rounded-md ml-8' href={GOOGLE_RESUME} target="_blank">
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
    );
}

export default Header;