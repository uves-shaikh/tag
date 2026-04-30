import type { Metadata } from "next";
import "@/index.css";
import Providers from "./providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Team Apex Gaming",
  description:
    "India's newest BGMI powerhouse. Founded by Jonathan Gaming. Time To Rise. #TAGONTOP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
