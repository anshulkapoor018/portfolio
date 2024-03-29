import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ThemeContainer from "./components/ThemeContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshul Kapoor",
  description: "Anshul Kapoor Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
