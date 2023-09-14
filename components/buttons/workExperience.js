"use client"
import Image from "next/image";
import { useState } from "react";
import shane from "../../public/shane.png";
import Expertise from "../expertise";

function WorkExperience() {
    const [showWorkExperience, setShowWorkExperience] = useState(false);
    return (
        <>
            <div className="relative mx-auto bg-gradient-to-b from-teal-800 overflow-clip rounded-full w-80 h-80 mt-4 shadow-md shadow-black">
                <Image className="cursor-pointer" onClick={() => setShowWorkExperience(!showWorkExperience)} src={shane} alt="Shane Rookey" style={{objectFit: "cover"}}/>
            </div>
            {showWorkExperience ?
                <Expertise /> 
                : undefined
            }
        </>
        
    );
}

export default WorkExperience;