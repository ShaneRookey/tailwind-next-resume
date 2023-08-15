import Darkmode from "./buttons/darkmode";
import Dropdown from "./buttons/dropdown";

function Header() {
    return ( 
        <nav className='py-6 mb-6 flex justify-between'>
            <div>
                <h1 className='text-sm font-burtons pt-2 text-teal-700'>Created by Shane Rookey</h1>
                <h2 className='text-xs font-burtons  text-teal-700'>Powered By React, Next.js & Tailwind.css</h2>
            </div>
            <div className="flex items-center">
                <Darkmode />
                <Dropdown />
            </div>
        </nav>
    );
}

export default Header;