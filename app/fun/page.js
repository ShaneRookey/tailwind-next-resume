'use client'
import ModelViewer from "@/components/3d/modelviewer";
import Image from "next/image";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import dg from "../../public/dg.png";

export default function Fun() {
    return (
        <>
            <div className="mx-auto lg:w-1/2 h-screen mb-20">
                <h1 className="text-center text-teal-700 text-4xl font-bold dark:text-white">Interactive Model</h1>
                <ModelViewer />
            </div>
            <div className="mb-5">
                <Image priority src={dg} alt="Disc Golf Render" className="mx-auto" quality={100}/>
            </div>
            <div className="sm:flex-1 lg:flex-row max-w-max justify-center mx-auto mb-5">
                <InstagramEmbed url="https://www.instagram.com/reel/CwLRuT0o5Js/" />
                <InstagramEmbed url="https://www.instagram.com/reel/ChSMRkhFWeA/" />
                <YouTubeEmbed url="https://youtube.com/watch?v=WBnqKxVd5E8" width="100%" height="600" />
                <h1 className="text-center text-teal-700 my-10 text-4xl font-bold dark:text-white">New Projects coming soon...</h1>
            </div>
        </>
    );
}