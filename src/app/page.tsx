"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navigation/navbar-wrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-20 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-10 lg:mb-8 md:mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md background-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Unlock the potential of your project with Prometheus!
          </p>
        </div>
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
          Welcome to <span className="text-primary">Prometheus</span>
        </h1>
        <p className="mt-5 max-w-prose text-xl text-zinc-500">
          Prometheus is your go-to starter command for initializing projects
          with cutting-edge web technologies. Seamlessly create projects
          featuring Next.js, React, Tailwind CSS, and the Shadcn UI library.
        </p>
      </MaxWidthWrapper>
    </>
  );
}
