import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Socials() {

    return (
        <div className="text-5xl flex justify-center gap-16 py-3 text-teal-800">
            <a href="https://www.instagram.com/shanerookey/" target="_blank">
                <AiFillInstagram className="cursor-pointer dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/shane-rookey-7273aa157/" target="_blank">
                <AiFillLinkedin className="cursor-pointer dark:text-white"/>
            </a>
        </div>
    );
}

export default Socials;