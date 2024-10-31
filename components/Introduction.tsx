"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function Introduction() {
  return (
    <WavyBackground className="max-w-6xl mx-auto">
      <p className="heading text-center mb-16">
        Gateway to the Solana Ecosystem
      </p>
    </WavyBackground>
  );
}
