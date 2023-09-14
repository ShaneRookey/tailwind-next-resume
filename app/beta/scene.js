import { Environment, Float, OrbitControls, PerspectiveCamera, ScrollControls, Stars } from "@react-three/drei";
import MyAvatar from "./avatar";
import Moon from "./moon";
import Planet from "./planet";

function Scene() {
    return (
        <>
            <ScrollControls>
                <Float>
                    <MyAvatar />
                    <Moon />
                </Float>
                <Float floatIntensity={0.1} rotationIntensity={0.1}>
                    <Planet />
                </Float>
            </ScrollControls>
            <OrbitControls enableZoom={false} />

            <Environment preset="sunset"/>

            {/* <Environment map={spaceTexture} background blur={0.5}/> */}
            <Stars radius={0} depth={5} count={1000} factor={0.5} saturation={100} fade speed={1}/>
            
            <PerspectiveCamera fov={75}/>
        </>
    );
}

export default Scene;