import Link from "next/link";
import Expertise from "../../components/expertise";

const GOOGLE_RESUME = "https://docs.google.com/document/d/1Ms-KHGH1sKV1NIhQ2Loz6JuYThjKSQr1/edit?usp=sharing&ouid=102424025146261627677&rtpof=true&sd=true"

export default function Resume() {
    return (
        <div className="flex-col">
            <Expertise />
            <Link className="text-black dark:text-white ml-8" target="_blank" href={GOOGLE_RESUME}>Link to the plain ole&apos; boring resume</Link>
        </div>
    
    );
}