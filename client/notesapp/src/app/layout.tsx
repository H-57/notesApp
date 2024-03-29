import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotesApp",
  description: "created in nexts js for notes taking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
<Navbar/>
        {children}
        </body>
    </html>
  );
}
