import Image from "next/image";
import React from "react";

const ModelViewer = React.lazy(() => import("@/components/3d/modelviewer"));

export default function Fun() {
  return (
    <div className="flex flex-col justify-center mx-5">
      <Image
        priority
        src="/0016.png"
        alt="Astro Render"
        quality={100}
        width={1920}
        height={1080}
        className="mb-5"
      />
      <Image
        priority
        src="/dg.png"
        alt="Disc Golf Render"
        quality={100}
        width={1920}
        height={1080}
        className="mb-5"
      />
      <video loop controls className="mb-5">
        <source src="/donut.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
