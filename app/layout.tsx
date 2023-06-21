import "./globals.css";
import { Nunito } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
// import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb App",
  description: "Airbnb Clone App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <LoginModal /> */}
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
