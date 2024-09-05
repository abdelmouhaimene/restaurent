import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cormorant_Upright,Open_Sans } from 'next/font/google';

const cormorantUprightFont = Cormorant_Upright({
  family: 'Cormorant Upright',
  subsets: ['latin'], // Add other subsets if needed
  weight: ['400', '700'], // Include different weights (optional)
  display: 'swap', // Control font loading behavior (optional)
  variable:'--font-cu'
});
const openSans = Open_Sans({
  family: 'Open_Sans',
  subsets: ['latin'], // Add other subsets if needed
  weight: ['400', '700'], // Include different weights (optional)
  display: 'swap', // Control font loading behavior (optional)
  variable:'--font-os'
});

export const metadata = {
  title: "Restaurent",
  description: "Restaurent app",
};

// export function generateStaticParams() {
//   return locales.map((locale) => ({locale}));
// }

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en">
      <body className={`${cormorantUprightFont.variable} ${openSans.variable}  bg-bg_black bg-auto bg-repeat bg-center bg-fixed`}>
        <Navbar />
        {children}
        <Footer />

        </body>

    </html>
  );
}
