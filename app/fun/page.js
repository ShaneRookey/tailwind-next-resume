'use client'
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

export default function Fun() {
    return (
        <div className="flex-1 max-w-max justify-center mx-auto">
            <InstagramEmbed url="https://www.instagram.com/reel/CwLRuT0o5Js/" />
            <InstagramEmbed url="https://www.instagram.com/reel/ChSMRkhFWeA" />
            <YouTubeEmbed url="https://youtube.com/watch?v=WBnqKxVd5E8" width="100%" height="600" />
            <h1 className="text-center text-teal-700 my-10 text-4xl font-bold dark:text-white">New Projects coming soon...</h1>
        </div>
    );
}