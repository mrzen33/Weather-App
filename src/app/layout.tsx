import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css'; // use bootstrap

export const metadata: Metadata = {
  title: "Weather App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
