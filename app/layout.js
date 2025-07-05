import "@/styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Analysis",
  description:
    "Detailed analysis of the demand and retail prices of petroleum products",
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
