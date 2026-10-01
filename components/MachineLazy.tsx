"use client";
import dynamic from "next/dynamic";
export const MachineLazy = dynamic(() => import("./Machine"), { ssr: false });
