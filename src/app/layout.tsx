import { Navbar } from "@/components";
import Providers from "@/components/utils/providers";
import TopButton from "@/components/utils/top-button";
import { base, heading } from "@/constants/fonts";
import { generateMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@mantine/core/styles.css";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>

            {/* <head>
                <ColorSchemeScript />
                <Head />
            </head> */}

            <body className={cn(
                "min-h-screen bg-background text-foreground antialiased font-heading relative",
                heading.variable,
                base.variable,
            )}>
                <Providers>
                    <Navbar />
                    {children}
                    <TopButton />
                </Providers>
            </body>
        </html>
    );
};
