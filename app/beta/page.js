"use client"
import { CircularProgress } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './scene';


export default function Beta() {
    return (
        <Suspense fallback={<CircularProgress size={100}/>}>
            <Canvas id="bg" style={{maxHeight:'87vh', position:'absolute'}} >
                <Scene />
            </Canvas>
        </Suspense>
    );
}