import "@/styles/globals.css";
import { Providers } from "./providers";


//metada to enhance SEO
export const metadata = {
  title: "Petroleum Price Analysis Dashboard",
  description: "Explore weekly trends and performance of PMS, AGO, DPK, and LPG across Nigeria from Nov 2024 to Jan 2025.",
  openGraph: {
    title: "Petroleum Price Analysis Dashboard",
    description: "Interactive fuel price trends across 36 Nigerian states.",
    url: "https://petrodata-analysis.vercel.app",
    siteName: "Nigeria Fuel Analysis",
    images: [
      {
        url: "/flame.png",
        width: 1200,
        height: 630,
        alt: "Fuel price dashboard preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petroleum Price Analysis Dashboard",
    description: "See price trends of PMS, AGO, DPK, and LPG in Nigeria.",
    images: ["/flame.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
