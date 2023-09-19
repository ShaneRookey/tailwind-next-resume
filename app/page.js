import WorkExperience from "@/components/buttons/workExperience";
import Socials from "@/components/socials";

export default function Home() { 
    return (
        <>
            <h2 className="text-center text-5xl py-2 text-teal-800 font-medium">Shane Rookey</h2>
            <h3 className="text-center text-2xl py-2 text-black dark:text-white">Software Engineer</h3>
            <p className="mx-1 indent-8 text-lg xl:px-80 text-black dark:text-white">   
                Eager and self-driven professional with a passion for excellence, seeking an exciting opportunity as a Software Engineer.
                I aim to channel my expertise in quality assurance and development lifecycles to enhance the customer experience and play a
                pivotal role in product and company success. My dedication to top-notch results, coupled with an
                optimistic perspective, is poised to make a significant impact within a dynamic organization that values innovation,
                effective communication, and steadfast work ethics.
            </p>
            <p className="mx-1 indent-8 text-lg xl:px-80 py-5 leading-8 text-black dark:text-white">
                I have 5 years of professional experience in the PV and renewable energy monitoring industry.
                I found that I truly enjoy becoming an expert and taking on responsibility with high expectations to execute.
                I like to be the subject matter expert and am able to learn quickly to fill the gaps that your company needs filled.
            </p>
            <p className="mx-1 text-center text-lg xl:px-80 py-5 leading-8 text-black dark:text-white">
                <br/><b>I enjoy working with React - which was used to create this website utilizing next.js and TailwindCss.</b>
            </p>
            
            <WorkExperience />
            <Socials/>
        </>
    );
}