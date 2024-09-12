import type { Metadata } from "next";
import { Merriweather_Sans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'; // use bootstrap

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App",
};

const my_font = Merriweather_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={my_font.className}>
        {children}
      </body>
    </html>
  );
}
