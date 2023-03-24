"use client"
import { METADATA_TEXTS } from "@/constants/metadata";
import { usePathname } from "next/navigation";
import React from "react";

const Head = () => {
  let router: any = usePathname();
  const meta = METADATA_TEXTS[`${router}`]?.meta
  const siteUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ""}${router || ""}`;
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <title>{meta ? meta.title + ' | ' + process.env.NEXT_PUBLIC_PROJECT_NAME : process.env.NEXT_PUBLIC_PROJECT_NAME}</title>
      <meta name="title" content={meta ? meta.title : ""} />
      <meta name="description" content={meta ? meta.description : ""} />
      <meta name="relation" content={router || ""} />
      <meta name="source" content={siteUrl} />
    </>
  );
};

export default Head;
