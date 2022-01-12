import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from 'semantic-ui-react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export function BlogPostTemplate({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) {
  const PostContent = contentComponent || Content;

  return (
    <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <Seo title={title} description={description} />

      <h1>{title}</h1>
      <p>{description}</p>

      <PostContent content={content} />
    </Container>
  );
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
};

function BlogPost({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
