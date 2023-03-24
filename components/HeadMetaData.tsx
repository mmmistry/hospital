import Head from "next/head";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

const HeadMetaData = ({ meta, children }: any) => {
  const { title, description } = meta;
  const router = usePathname();
  const siteUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ""}${router || ""
    }`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <title>{title || process.env.NEXT_PROJECT_NAME}</title>
        <meta name="title" content={title || ""} />
        <meta name="description" content={description || ""} />
        <meta name="relation" content={router || ""} />
        <meta name="source" content={siteUrl} />

      </Head>
      {children}
    </>
  );
};

export default HeadMetaData;
