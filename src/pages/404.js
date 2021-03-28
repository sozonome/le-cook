import React from "react";
import { Heading, Paragraph } from "evergreen-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading size={800} fontWeight={"bold"}>
      NOT FOUND
    </Heading>
    <Paragraph>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph>
  </Layout>
);

export default NotFoundPage;
