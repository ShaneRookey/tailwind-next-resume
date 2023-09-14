import { Sphere, Torus, useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { TextureLoader } from "three";

function Planet() {
    const jupiterTexture = useLoader(TextureLoader, 'jupiter.jpg');
    const sphere = useRef();
    const torus = useRef();
    const planet = useRef();
    const tl = useRef();

    const scroll = useScroll();
    
    useFrame(() => {
        sphere.current.rotation.x += 0.001;
        sphere.current.rotation.y += 0.001;

        torus.current.rotation.x += 0.003;
        tl.current.seek(scroll.offset * tl.current.duration());
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // y animation
        tl.current.to(
            planet.current.position,
            {
                duration: 2,
                y: 6,
            },
            0
        );

        // x animation
        tl.current.to(
            planet.current.position,
            {
                duration: 2,
                x: -6,
                y: 6,
            },
            0
        );

    })

    return (
        <group ref={planet}>
            <Torus ref={torus} args={[5]} position={[10,0,-10]} scale={1}>
                <meshBasicMaterial color={0xe8ddb5} transparent opacity={0.7}/>
            </Torus>
            <Sphere ref={sphere} args={[3]} position={[10,0,-10]}>
                <meshStandardMaterial map={jupiterTexture}>
                </meshStandardMaterial>
            </Sphere>
        </group>
    );
}

export default Planet;