import { FlareCursor, Navbar } from "@/components";
import BuymeCoffeeButton from "@/components/utils/buyme-coffee-button";
import Providers from "@/components/utils/providers";
import { base, heading } from "@/constants/fonts";
import { generateMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import Head from "./head";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>

            <head>
                <ColorSchemeScript />
                <Head />
            </head>

            <body className={cn(
                "min-h-screen bg-background text-foreground antialiased font-heading relative",
                heading.variable,
                base.variable,
            )}>
                <Providers>
                    <Navbar />
                    {children}
                    <FlareCursor />
                    <BuymeCoffeeButton />
                </Providers>
            </body>
        </html>
    );
};
