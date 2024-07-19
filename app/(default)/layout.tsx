"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex bg-[#212121] flex-col flex-1">
            <Header />

            <main>{children}</main>

            <Footer />


          </div>
        </div>
      </div>



    </>
  );
}
