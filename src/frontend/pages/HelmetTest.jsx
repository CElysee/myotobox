// TestHelmet.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

function TestHelmet() {
  return (
    <>
      <Helmet>
        <title>Test Page with Helmet</title>
        <meta
          name="description"
          content="Premium Package (4-zone climate control, Lane Change Assist, ambient lighting plus, soft-close doors, heated front and rear seats)"
        />
      </Helmet>
      <div>Test Page Content</div>
    </>
  );
}

export default TestHelmet;
