"use client";
import React from "react";
import Home from "./home";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>
  );
}
