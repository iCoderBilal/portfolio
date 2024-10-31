"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Feature from "@/components/Feature";
import FAQ from "@/components/FAQ";
import { Introduction } from "@/components/Introduction";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <div className="relative">
          <Introduction />
        </div>
        <div className="max-w-7xl mx-auto sm:px-10 px-5">
          <Feature />
          {/* <Experience /> */}

          {/* <Grid />
        <RecentProjects /> */}
          <Clients />
          {/* 
        <Approach /> */}
          <FAQ />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
