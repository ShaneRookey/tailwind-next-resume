import { GltfModel } from "@/components/3d/gltfmodel";
import { Sphere, useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { TextureLoader } from "three";

function Moon() {
    const moonTexture = useLoader(TextureLoader, "moon.jpg");
    const norm = useLoader(TextureLoader, "moonnorm.png")
    const moon = useRef();
    const tl = useRef();

    const scroll = useScroll();

    useFrame(() => {
        moon.current.rotation.x += 0.001;
        tl.current.seek(scroll.offset * tl.current.duration());
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // rotation
        tl.current.to(
            moon.current.rotation,
            { duration: 3, x: 0, y: 25, z: 0 },
            0
        )

        // y animation
        tl.current.to(
            moon.current.position,
            {
                duration: 2,
                y: 5,
            },
            0
        );

    })
    return (
        <group ref={moon} position={[0,-5,0]}>
            <GltfModel position={[0,-3.24,0]} scale={.8}/>
            <Sphere position={[0,-6,0]} scale={2}>
                <meshStandardMaterial map={moonTexture} normalMap={norm}/>
            </Sphere>
        </group>
        
    );
}

export default Moon;