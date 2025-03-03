"use client";
import React from "react";
import WebsiteLayout from "./website/website.layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <>
          <WebsiteLayout>{children}</WebsiteLayout>
        </>
      </body>
    </html>
  );
}
