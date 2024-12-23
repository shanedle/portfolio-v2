import "./globals.css";

import { Inter, Carattere } from "next/font/google";

import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/ui/navbar";
import { constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const carattere = Carattere({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
