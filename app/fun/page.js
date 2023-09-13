'use client'
import { CircularProgress, Grid } from "@mui/material";
import Image from "next/image";
import React, { Suspense } from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

const ModelViewer = React.lazy(() => import("@/components/3d/modelviewer"))

export default function Fun() {
    return (
        <Grid container columns={{xs:1, md: 3}}>
            <Grid item md={1} className="p-5 flex justify-center align-middle">
                <Suspense fallback={<CircularProgress size={100}/>}>
                    <ModelViewer />
                </Suspense>
            </Grid>
            <Grid item md={2} className="p-5">
                <Image priority src="/dg.png" alt="Disc Golf Render"  quality={100} width={1920} height={1080}/>
            </Grid>
            <Grid item md={1} className="p-5">
                <InstagramEmbed url="https://www.instagram.com/reel/CwLRuT0o5Js/" />
            </Grid>
            <Grid item md={1} className="p-5">
                <YouTubeEmbed url="https://youtube.com/watch?v=WBnqKxVd5E8" width="100%"/>
            </Grid>
            <Grid item md={1} className="p-5">
                <InstagramEmbed url="https://www.instagram.com/reel/ChSMRkhFWeA/" />
            </Grid>
        </Grid>
    );
}