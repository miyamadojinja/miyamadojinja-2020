import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Card, Container, Grid, Header, Segment } from 'semantic-ui-react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export function CatalogPageTemplate({
  content,
  contentComponent,
  description,
  title,
  helmet,
  categories = [],
  catalogItems = [],
}) {
  const PostContent = contentComponent || Content;

  return (
    <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <Seo title={title} description={description} />

      <h1>{title}</h1>
      <p>{description}</p>

      {categories.map(category => {
        const filteredItems = catalogItems.filter(
          item => item.category === category.title
        );

        return (
          <Segment vertical key={category.title}>
            <Header>{category.title}</Header>
            <p>{category.description}</p>

            <Grid doubling columns={5}>
              {filteredItems.map(({ image, title, description }) => {
                const imageUrl = !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image;
                return (
                  <Grid.Column key={imageUrl}>
                    <Card
                      image={imageUrl}
                      header={title}
                      description={description}
                    />
                  </Grid.Column>
                );
              })}
            </Grid>
          </Segment>
        );
      })}

      <PostContent content={content} />
    </Container>
  );
}

CatalogPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  categories: PropTypes.array,
  catalogItems: PropTypes.array,
};

function CatalogPage({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CatalogPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        categories={post.frontmatter.categories}
        catalogItems={post.frontmatter.catalogItems}
      />
    </Layout>
  );
}

CatalogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CatalogPage;

export const pageQuery = graphql`
  query CatalogPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        categories {
          title
          description
        }
        catalogItems {
          category
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
