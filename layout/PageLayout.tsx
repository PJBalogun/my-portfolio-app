import Footer from "../components/global/Footer";
import Head from "next/head";
// import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../components/global/Navbar";
import React, { ReactChildren } from "react";

import "@/styles/main.css";

type PageProps = {
    currentPage: string;
    meta?: {
      title?: string;
      desc: string;
    };
    children?: PageElementProps ;
  };
  type PageElementProps = JSX.Element | JSX.Element[];
  
  

export function PageLayout({ currentPage, meta, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Brayden Wright - Web Developer, Designer, Creator."
      : `${currentPage} - BraydenTW.io`
  }`;
  console.log(currentPage);
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          {/* <MobileNavbar /> */}
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export const getLayout = (page : PageElementProps, {currentPage} : PageProps ) => <PageLayout currentPage={currentPage}>{page}</PageLayout>

