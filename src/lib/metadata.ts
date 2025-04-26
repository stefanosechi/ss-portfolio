import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
    canonical?: string;
    category?: string;
    section?: string;
}
// TODO: Make a logo like attio
export const generateMetadata = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME}`,
    description = "I'm a developer and entrepreneur.",
    image = "/images/og-image.png",
    icons = [
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/favicon.png",
            // media: "(prefers-color-scheme: light)",
        },
    ],
    noIndex = false,
    keywords = [
         
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME || "",
    twitterHandle = "",
    type = "website",
    locale = "en_US",
    alternates = {},
    publishedTime,
    modifiedTime,
    canonical,
    category,
    section,
}: MetadataProps = {}): Metadata => {
    const metadataBase = process.env.NEXT_PUBLIC_APP_URL ? new URL(process.env.NEXT_PUBLIC_APP_URL) : undefined;

    const imageUrl = image
        ? image.startsWith('http')
            ? image
            : metadataBase
                ? new URL(image, metadataBase).toString()
                : null
        : null;

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME || "",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,

        // OpenGraph
        openGraph: {
            type,
            siteName: process.env.NEXT_PUBLIC_APP_NAME || "",
            title,
            description,
            ...(imageUrl && {
                images: [{
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }]
            }),
            locale,
            alternateLocale: Object.keys(alternates),
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
            ...(category && { category }),
            ...(section && { section }),
        },

        // Twitter
        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            site: twitterHandle,
            creator: twitterHandle,
            title,
            description,
            ...(imageUrl && { images: [imageUrl] })
        },

        // Robots
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
            yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
        },

        other: {
            'og:image:type': 'image/png',
            'og:image:width': '1200',
            'og:image:height': '630',
        },

        // Add canonical URL
        ...(canonical && {
            alternates: {
                canonical,
                ...alternates
            }
        }),

        // Additional SEO metadata
        // manifest: "/manifest.json",
        applicationName: process.env.NEXT_PUBLIC_APP_NAME,
        referrer: "origin-when-cross-origin",
    };
};
