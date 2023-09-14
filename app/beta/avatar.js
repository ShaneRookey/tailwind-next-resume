import { Box, useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { TextureLoader } from "three";

function MyAvatar() {
    const avatar = useRef();
    const avatarTexture = useLoader(TextureLoader, "shanebrick.jpg");
    const tl = useRef();

    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // rotation
        tl.current.to(
            avatar.current.rotation,
            { duration: 3, x: 0, y: 20, z: 0 },
            0
        )

        // y animation
        tl.current.to(
            avatar.current.position,
            {
                duration: 2,
                y: 6,
            },
            0
        );

        // x animation
        tl.current.to(
            avatar.current.position,
            {
                duration: 2,
                x: -6,
                y: 6,
            },
            0
        );

    })

    return ( 
        <Box ref={avatar} args={[2,2,2]}>
            <meshBasicMaterial map={avatarTexture}/>
        </Box>
        
    );
}

export default MyAvatar;