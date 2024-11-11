import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./custom.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:"KS Junction | software development institute",
    template:"%s"
  },
  description:"khariwal software junction is a institute where we make student skillful in software development. KSJunction is also part of agency where we provide services of softwares, create dynamic websites",
  keywords:"KSJunction , coding institute in sirsa haryana, software institute in sirsa haryana, best software coaching center in sirsa haryana, software service in sirsa haryana",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.png",
      },
      {
        rel: "apple-touch-icon",
        url: "/next.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="qjwVCMLhB89aFVJ5W7N3S8U8wvuE-tDeZmNYbHbs1yM" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
