import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout"

/* export default ({ data }) => (
  <React.Fragment>
    <h2>{data.site.siteMetadata.title}</h2>
    <div>{data.site.siteMetadata.description}</div>
    <Link to="/">Back to home</Link>
  </React.Fragment>
) */

import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const about = () => (
  <Layout>
    <Seo title="about" />
    <StaticImage
      src="../images/IMG_0096.JPG"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="IMG_0096.JPG"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
	  <Link to="/">Go back to the homepage</Link>
    </p>
  </Layout>
)

export default about


/* export const query = graphql `
  query {
    site {
      siteMetadata {
        author,
        description,
        title
      }
    }
  }
`	 */