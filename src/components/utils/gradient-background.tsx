"use client";

import React from 'react';
import { AnimatedGrid } from "../ui/animated-grid";

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full relative min-h-screen">

            <AnimatedGrid
                numSquares={20}
                maxOpacity={0.1}
                duration={6}
                className="inset-x-0 h-3/5"
            />

            <div className="bg-gradient-to-t from-background z-10 h-4/5 w-full absolute inset-x-0 top-0"></div>

            <div className="aspect-square size-[280px] lg:size-[565px] absolute left-1/2 -translate-x-1/2 top-0 lg:top-[-200px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(98,98,115,0.8)_0%,rgba(98,98,115,0)_100%)] rounded-full blur-[4rem] lg:blur-[14rem] z-10"></div>

            {/* <div className="fixed top-0 flex-none h-screen w-full left-[calc(50%-100%/2)] z-20 opacity-50">
                <div className="size-full bg-repeat opacity-[0.075] bg-[size:128px] bg-[url('/images/noise.png')]"></div>
            </div> */}

            {/* <div className="flex-none blur-3xl fixed overflow-visible w-5/6 h-[480px] top-[calc(50%-480px/2)] left-[calc(50%-84.66%/2)] -z-10"></div> */}

            {children}
        </div>
    )
};

export default GradientBackground;

{/* <motion.div
        animate={{
            scale: [1, 1.2, 1],
            x: [0, 500, -300, 0],
            y: [0, 200, -200, 0],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        }}
        className="absolute bg-purple-500 size-40 blur-[0] rounded-full opacity-50"
    />
    <motion.div
        animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -500, 300, 0],
            y: [0, 150, -150, 0],
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        }}
        className="absolute bg-blue-500 size-40 blur-[0] rounded-full left-[20%] opacity-50"
    />
    <motion.div
        animate={{
            scale: [1.1, 1.3, 1.1],
            x: [0, 500, -300, 0],
            y: [0, -220, 220, 0],
        }}
        transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        }}
        className="absolute bg-blue-500 size-40 blur-[0] rounded-full left-[40%] opacity-50"
    /> */}
{/* <div className="absolute left-1/2 -translate-x-1/2 bg-violet-500/60 w-1/2 h-[400px] blur-[5rem] opacity-30" />
    <motion.div
        animate={{
            x: [0, 400, 200, 0, 0],
            y: [0, 0, 300, 300, 0],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        }}
        className="absolute left-1/4 -translate-x-1/2 bg-blue-500 size-52 blur-[4rem] opacity-30"
    /> */}
