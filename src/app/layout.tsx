"use client";
import React from "react";
import Application from "./application";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Application />
      </body>
    </html>
  );
}
