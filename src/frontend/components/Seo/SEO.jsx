// import React from "react";
// import { SuperSEO } from "react-super-seo";

// const defaultMeta = {
//   title: "Easy Car Buying & Renting in Rwanda | Myotobox",
//   description:
//     "Buying or renting a car in Rwanda is easy with Myotobox. Choose from a wide selection of new and used cars at unbeatable rental rates.",
//   name: "Myotobox",
//   type: "website",
//   url: "https://www.myotobox.rw/",
//   image: "/assets/images/meta_image1.jpeg",
// };

// export default function SEO({ title, description, name, type, url, image }) {
//   const meta = {
//     title: title || defaultMeta.title,
//     description: description || defaultMeta.description,
//     name: name || defaultMeta.name,
//     type: type || defaultMeta.type,
//     url: url || defaultMeta.url,
//     image: image || defaultMeta.image,
//   };

//   return (
//     <SuperSEO
//       title={title}
//       description={description}
//       lang="en"
//       openGraph={{
//         ogImage: {
//           ogImage: image,
//           ogImageAlt: title,
//           ogImageWidth: 1200,
//           ogImageHeight: 630,
//           ogImageType: "image/jpeg",
//         },
//         ogUrl: url,
//       }}
//       twitter={{
//         twitterSummaryCard: {
//           summaryCardImage: image,
//           summaryCardImageAlt: title,
//           summaryCardSiteUsername: "MyOtobox",
//         },
//       }}
//     />
//   );
// }
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, url, image }) => (
  <Helmet prioritizeSeoTags>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </Helmet>
);

export default SEO;