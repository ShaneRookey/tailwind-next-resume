'use client'
import Image from "next/image";
import { useState } from "react";
import Expertise from "../../components/expertise";
import shane from "../../public/shane.png";

export default function Home() {
    const [showWorkExperience, setShowWorkExperience] = useState(false);
    
    return (
        <>
            <div className="text-center">
                <h2 className="text-5xl py-2 text-teal-800 font-medium">Shane Rookey</h2>
                <h3 className="text-2xl py-2 text-black dark:text-white">Software Engineer</h3>
                <p className="text-lg xl:px-80 text-black dark:text-white">   
                    Eager and self-driven professional with a passion for excellence, seeking an exciting opportunity as a Software Engineer.
                    I aim to channel my expertise in quality assurance and development lifecycles to enhance the customer experience and play a
                    pivotal role in product and company success. My dedication to top-notch results, coupled with an
                    optimistic perspective, is poised to make a significant impact within a dynamic organization that values innovation,
                    effective communication, and steadfast work ethics.
                </p>
                <p className="text-lg xl:px-80 py-5 leading-8 text-black dark:text-white">
                    I have 5 years of professional experience in the PV and renewable energy monitoring industry.
                    I found that I truly enjoy becoming an expert and taking on responsibility with high expectations to execute.
                    I like to be the subject matter expert and am able to learn quickly to fill the gaps that your company needs filled.
                    
                    <br/><b>I enjoy working with React - which was used to create this website utilizing next.js and TailwindCss.</b>
                </p>
                <div className="relative mx-auto bg-gradient-to-b from-teal-800 overflow-clip rounded-full w-80 h-80 mt-4 shadow-md shadow-black">
                    <Image className="cursor-pointer" onClick={() => setShowWorkExperience(!showWorkExperience)}src={shane} alt="Shane Rookey" style={{objectFit: "cover"}}/>
                </div>
                {showWorkExperience ?
                    <Expertise /> 
                    : undefined
                }
            </div>
        </>
    );
}