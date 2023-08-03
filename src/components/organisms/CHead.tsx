import Head from "next/head";
import React from "react";

type Props = {
  meta: MetaData;
  slug: string;
};

export interface MetaData {
  title: string;
  description: string;
  image: string;
}

const CHead = ({ meta: { title, description, image }, slug }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://gigaclear.com/${slug}`} />
      <meta
        name="og:url"
        property="og:url"
        content={`https://gigaclear.com/${slug}`}
      />
      <meta name="og:type" property="og:type" content="article" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:image" property="og:image" content={image} />
      <meta name="og:site_name" property="og:site_name" content="GigaClear" />
      <meta name="description" property="description" content={description} />
      <meta
        name="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        property="twitter:site"
        content="@just-dev-it"
      />
      <meta
        name="twitter:creator"
        property="twitter:creator"
        content="@just-dev-it"
      />
      <meta name="twitter:title" property="twitter:title" content={title} />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        property="twitter:image"
        content={image}
      />
    </Head>
  );
};

export default CHead;
