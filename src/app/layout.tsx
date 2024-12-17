import { Navbar } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { heading, base } from "@/lib/fonts";
import { generateMetadata } from "@/utils/metadata";

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

                <Navbar />
                {children}

            </body>
        </html>
    );
};
