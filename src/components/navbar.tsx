"use client";

import { LINKS } from '@/lib/links';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileNav from './mobile-navbar';
import { FloatingDock } from "./ui/floating-dock";
import { Dock, DockIcon } from "./ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { GithubIcon } from "lucide-react";

const DATA = {
    navbar: LINKS,
    contact: {
        social: {
            github: {
                name: "Github",
                url: "https://github.com/joshua-s-dev",
                icon: GithubIcon,
            },
        },
    },
};

const Header = () => {

    const pathname = usePathname();

    const [activeLink, setActiveLink] = useState("Home");

    const isBlogActive = pathname?.startsWith('/blog');

    return (
        <header className="z-[99999] flex justify-center items-center w-full fixed bottom-6 inset-x-0">

            {/* <FloatingDock
                mobileClassName="translate-y-20"
                items={LINKS}
            /> */}

            <TooltipProvider delayDuration={0}>
                <Dock direction="middle">
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
                    {/* <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        aria-label={social.name}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full",
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))} */}
                    {/* <Separator orientation="vertical" className="h-full py-2" /> */}
                    {/* <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ModeToggle className="rounded-full" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon> */}
                </Dock>
            </TooltipProvider>

        </header>
    )
}

export default Header
