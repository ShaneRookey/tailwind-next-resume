import Link from "next/link";
import Expertise from "../../components/expertise";

const GOOGLE_RESUME = "https://docs.google.com/document/d/18NUHed6_6zTmV6ZcxNMMzdIkBFLMPc7UsGQNcSiILPE/edit?usp=sharing"

export default function Resume() {
    return (
        <div className="flex-col">
            <Expertise />
            <Link className="text-black dark:text-white ml-8" target="_blank" href={GOOGLE_RESUME}>Link to the plain ole&apos; boring resume</Link>
        </div>
    );
}