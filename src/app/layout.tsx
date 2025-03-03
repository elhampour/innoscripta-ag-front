"use client";
import React from "react";
import NewsApp from "./news";
import { Container, TextField, Typography } from "@mui/material";
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
