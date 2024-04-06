import type { Metadata } from "next";
import "@/shared/assets/globals.css";
import { protoGrotesk, suisse } from "@/shared/assets/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          "min-h-screen bg-background font-suisse antialiased",
          suisse.variable,
          protoGrotesk.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
