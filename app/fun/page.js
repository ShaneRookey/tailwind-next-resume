'use client'
import { YouTubeEmbed } from "react-social-media-embed";

export default function Fun() {
    return (
        <>
            <div className="flex justify-center">
                <YouTubeEmbed url="https://youtube.com/watch?v=WBnqKxVd5E8" />
            </div>
            <h1 className="text-center text-teal-700 text-4xl mx-40 mt-20 mb-40 font-bold dark:text-white">New Projects coming soon...</h1>
        </>
    );
}