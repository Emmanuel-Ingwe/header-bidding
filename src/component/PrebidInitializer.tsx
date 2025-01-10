"use client";

import { useEffect } from "react";
import { configurePrebid } from "@/src/utils/prebidConfig";

export const PrebidInitializer = () => {
  useEffect(() => {
    const initializePrebid = () => {
      if (window.pbjs) {
        configurePrebid();
      } else {
        console.warn("Prebid.js is not loaded yet.");
      }
    };

    const script = document.querySelector('script[src="/js/prebid.js"]');
    if (script) {
      script.addEventListener("load", initializePrebid);
    }

    return () => {
      if (script) {
        script.removeEventListener("load", initializePrebid);
      }
    };
  }, []);

  return null; // This component has no UI, it's just for logic
};
