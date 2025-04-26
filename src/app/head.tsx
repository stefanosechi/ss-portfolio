"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const Head = () => {
    const pathname = usePathname();
    const title = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

    const meta = {
        title: `Stefano Sechi ${pathname === "/" ? "" : "• " + title.replace(/[-/]/g, " ")}`,
        description: "I'm a developer and entrepeneur. I create and develop solutions in the present but with an eye to the future.",
        keywords: "Stefano Sechi, Web Developer, Software Engineer, Full Stack Developer, Italian Developer",
        type: "website",
    };

    return (
        <>
            <title>{meta.title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
            <meta name='robots' content='follow, index' />
            <meta content={meta.description} name='description' />
            <meta name='keywords' content={meta.keywords} />
            <meta property='og:url' content={`https://github.com/stefanosechi/ss-portfolio${pathname}`} />
            <link rel='canonical' href={`https://github.com/stefanosechi/ss-portfolio${pathname}`} />
            <link rel='me' href='mailto:stefanosechibusiness@gmail.com' />
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content='Stefano Sechi' />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='' />
            <meta name='twitter:title' content={meta.title} />
            <meta name='twitter:description' content={meta.description} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <meta name="theme-color" content="#000000" />
        </>
    )
}

export default Head;
