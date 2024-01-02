import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { Loader2 } from "lucide-react";
import { ToastContainer } from "react-toastify";

const LoadingScreen = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
          <h3 className="font-semibold text-xl">Loading...</h3>
          <p>Give it a short second!</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default LoadingScreen;
