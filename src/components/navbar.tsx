"use client"

import { LINKS } from '@/constants/links';
import { cn } from '@/lib/utils';
import { FileTextIcon } from "lucide-react";
import Icons from "./ui/icons";
import Link from 'next/link';
import { buttonVariants } from "./ui/button";
import { Dock, DockIcon } from "./ui/dock";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import AnimationContainer from "./utils/animation-container";
import { motion } from "framer-motion";

const DATA = {
    navbar: LINKS,
    contact: {
        social: {
            
            github: {
                name: "GitHub",
                url: "https://github.com/stefanosechi",
                icon: Icons.github,
            },
            linkedin: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/stefano-s-743642243",
                icon: Icons.linkedin,
            },
            
            upwork: {
                name: "Upwork",
                url: "https://www.upwork.com/freelancers/~0177ceff10612ce03b ",
                icon: null,
            },
            resume: {
                name: "CV",
                url: "/images/me.pdf",
                icon: FileTextIcon,
            
            },
        },
    },
};

const Header = () => {
    return (
        <header className="z-[999] flex justify-center items-center w-full fixed bottom-6 inset-x-0 cursor-none">

            <div className="w-full h-16 bg-gradient-to-t from-background absolute -bottom-8 inset-x-0 -z-10"></div>

            <AnimationContainer animation="slide-up" delay={0.3} duration={1.0} animateOnMount={true}>
                <TooltipProvider delayDuration={0}>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Dock direction="middle" className="relative">
                            {DATA.navbar.map((item) => (
                                <DockIcon key={item.name}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={item.href}
                                                aria-label={item.name}
                                                className={cn(
                                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                                    "size-10 rounded-xl",
                                                )}
                                            >
                                                <item.icon className="size-4" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent sideOffset={10} className="px-2 py-1 text-xs">
                                            <p>{item.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </DockIcon>
                            ))}
                            <Separator orientation="vertical" className="h-full" />
                            {Object.entries(DATA.contact.social).map(([name, social]) => (
                                <DockIcon key={name} className={social.name === "Buy me a coffee" ? "md:!hidden md:w-0" : undefined}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={social.url!}
                                                target="_blank"
                                                aria-label={social.name}
                                                className={cn(
                                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                                    "size-12 rounded-xl",
                                                )}
                                            >
                                                {social.name === "Upwork" ? (
                                                    <img
                                                        src="/images/upwork.svg"
                                                        alt="Upwork"
                                                        className="size-4"
                                                    />
                                                ) : (
                                                    <social.icon className="size-4" />
                                                )}
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{social.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </DockIcon>
                            ))}
                        </Dock>
                    </motion.div>
                </TooltipProvider>
            </AnimationContainer>

        </header>
    )
}

export default Header
