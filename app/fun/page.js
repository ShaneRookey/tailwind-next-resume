'use client'
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

export default function Fun() {
    return (
        <div className="flex-col max-w-max justify-center mx-auto">
            <div className="flex">
                <InstagramEmbed className="m-20" url="https://www.instagram.com/reel/CwLRuT0o5Js/" width={535}/>
                <InstagramEmbed className="m-20" url="https://www.instagram.com/reel/ChSMRkhFWeA" width={535}/>
            </div>
            <YouTubeEmbed className="mx-auto" url="https://youtube.com/watch?v=WBnqKxVd5E8" width={600} height={800}/>
            <h1 className="text-center text-teal-700 text-4xl mx-40 mt-20 mb-40 font-bold dark:text-white">New Projects coming soon...</h1>
        </div>
    );
}