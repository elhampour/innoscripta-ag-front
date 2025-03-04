"use client";

import React, { useEffect, useState } from "react";

import Application from "./application";

export default function RootLayout() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <html lang="en">
        <body></body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <Application />
      </body>
    </html>
  );
}
