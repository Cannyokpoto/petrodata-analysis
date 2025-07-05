"use client";

import { PetroContextProvider } from "@/Context/Context";


export function Providers({ children }) {

  return (
    <PetroContextProvider>
      {children}
    </PetroContextProvider>
  );
}
