'use client'
import { useState } from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { InstagramEmbed, LinkedInEmbed } from 'react-social-media-embed';

function Socials() {
    const [showInsta, setShowInsta] = useState(false);
    const [showLinkedIn, setShowLinkedIn] = useState(false);

    const handleInstaClick = () => {
        setShowInsta(!showInsta);
    }

    const handleLinkedInClick = () => {
        setShowLinkedIn(!showLinkedIn);
    }

    const renderSocialLabel = () => {
        return <div className="text-md font-burtons text-center mb-5 text-teal-800 dark:text-white">Click to see updates on my latest Instagram and LinkedIn posts!</div>;
    }

    return ( 
        <div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-teal-800">
                <AiFillInstagram className="cursor-pointer dark:text-white" onClick={handleInstaClick}/>
                <AiFillLinkedin className="cursor-pointer dark:text-white" onClick={handleLinkedInClick}/>
            </div>
            {!showInsta && !showLinkedIn ? renderSocialLabel() : undefined}
            {showInsta ?
                <div className="lg:flex gap-5 w-max mx-auto">
                    <InstagramEmbed className="m-5" url="https://www.instagram.com/p/CvUkN-iRZEH/" width={400}/>
                    <InstagramEmbed className="m-5" url="https://www.instagram.com/p/CqiaUfpMwFf/" width={400}/>
                    <InstagramEmbed className="m-5" url="https://www.instagram.com/p/CfDF0SEMN81/?img_index=1" width={400}/>
                </div> 
                : undefined
            }
            {showLinkedIn ?
                <div>
                    <LinkedInEmbed className="m-5" url="https://www.linkedin.com/embed/feed/update/urn:li:share:7094667736621973504"/>
                </div>
                :  undefined
            }
        </div>
    );
}

export default Socials;