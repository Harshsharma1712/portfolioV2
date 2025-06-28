import "./globals.css";

import Footer from "@/components/footer";

export const metadata = {
  title: "Harsh Portfolio",
  description: "I made this portfolio using Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
