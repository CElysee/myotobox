import React from "react";
import { Helmet } from "react-helmet-async";

const defaultMeta = {
  title: "Easy Car Buying & Renting in Rwanda | Myotobox",
  description:
    "Buying or renting a car in Rwanda is easy with Myotobox. Choose from a wide selection of new and used cars at unbeatable rental rates.",
  name: "Myotobox",
  type: "website",
  url: "https://www.myotobox.rw/",
  image: "/assets/images/meta_image1.jpeg",
};
export default function SEO({ title, description, name, type, url, image }) {
  const meta = {
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    name: name || defaultMeta.name,
    type: type || defaultMeta.type,
    url: url || defaultMeta.url,
    image: image || defaultMeta.image,
  };
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {/* End standard metadata tags */}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.url && <meta property="og:url" content={meta.url} />}
      {meta.image && <meta property="og:image" content={meta.image} />}
      {/* End Open Graph / Facebook tags */}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={meta.name} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={meta.image} />}
      {/* End Twitter tags */}
    </Helmet>
  );
}
