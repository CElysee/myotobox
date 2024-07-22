import React from "react";
import { SuperSEO } from "react-super-seo";

export default function SEO({ title, description, name, type, url, image }) {
  return (
    <SuperSEO
      title={title}
      description={description}
      lang="en"
      openGraph={{
        ogImage: {
          ogImage: image,
          ogImageAlt: title,
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/jpeg",
        },
        ogUrl: url,
      }}
      twitter={{
        twitterSummaryCard: {
          summaryCardImage: image,
          summaryCardImageAlt: title,
          summaryCardSiteUsername: "MyOtobox",
        },
      }}
    />
  );
}
