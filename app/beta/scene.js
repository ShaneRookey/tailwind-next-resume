import { Float, OrbitControls, PerspectiveCamera, ScrollControls, Stars } from "@react-three/drei";
import MyAvatar from "./avatar";
import Moon from "./moon";
import Planet from "./planet";

function Scene() {
    return (
        <>
            <ScrollControls>
                <Float floatIntensity={2} rotationIntensity={2}>
                    <MyAvatar />
                    <Moon />
                </Float>
                <Float floatIntensity={0.1} rotationIntensity={0.1}>
                    <Planet />
                </Float>
            </ScrollControls>
            <OrbitControls enableZoom={false} />

            <pointLight intensity={100} position={[6,0,6]}/>
            <Stars radius={0} depth={13} count={5000} factor={1} saturation={100} fade speed={1}/>
            
            <PerspectiveCamera fov={75}/>
        </>
    );
}

export default Scene;