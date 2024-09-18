import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import AuthorizationPage from "@/components/initial/AuthorizationPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plasig",
  description: "Detect ocean plastic waste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <SignedOut>
        <AuthorizationPage/>
      </SignedOut>
      <SignedIn>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </SignedIn>
    </ClerkProvider>
  );
}
