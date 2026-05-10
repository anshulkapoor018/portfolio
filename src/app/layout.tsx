import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ThemeContainer from "./components/ThemeContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Anshul Kapoor | Software Engineer",
    template: "%s | Anshul Kapoor",
  },
  description:
    "Anshul Kapoor is a software engineer building scalable fintech frontends, microfrontend systems, and GraphQL-driven product experiences.",
  keywords: [
    "Anshul Kapoor",
    "Software Engineer",
    "Frontend Architecture",
    "Microfrontends",
    "GraphQL",
    "Fintech",
  ],
  authors: [{ name: "Anshul Kapoor" }],
  creator: "Anshul Kapoor",
  openGraph: {
    title: "Anshul Kapoor | Software Engineer",
    description:
      "Software engineer building scalable fintech frontends, microfrontend systems, and GraphQL-driven product experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Anshul Kapoor | Software Engineer",
    description:
      "Software engineer building scalable fintech frontends, microfrontend systems, and GraphQL-driven product experiences.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
					<div>
						<ThemeContainer />
						<main>{children}</main>
					</div>
				</Providers>
      </body>
    </html>
  );
}
