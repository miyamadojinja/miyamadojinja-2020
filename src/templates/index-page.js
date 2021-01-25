import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  List,
  Message,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/Layout';
import KeidaiContent from '../components/KeidaiContent';
import SocialButtons from '../components/SocialButtons';
import FacebookTimeline from '../components/FacebookTimeline';
import GoogleMap from '../components/GoogleMap';
import miyamadosan from '../img/miyamadosan.svg';

export function IndexPageTemplate({ image, title, description, relatedLinks }) {
  const backgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  return (
    <>
      <Media query={{ maxWidth: 991 }}>
        {(matches) => (
          <Link
            to={`/honden`}
            style={{
              alignItems: `center`,
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              display: `flex`,
              justifyContent: `center`,
              width: '100vw',
              height: matches ? '600px' : '900px',
            }}
          />
        )}
      </Media>

      <Container style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {/* TODO: Make this editable from CMS  */}
          <Segment padded="very" vertical>
            <Message
              info
              header="お知らせ"
              content="今年、令和3年 節分祭2月2日「狐の嫁入り道中」の中止、「豆まき」の中止が決定となりました。"
            />
          </Segment>

          <Segment padded="very" vertical>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.7' }}>
              {description}
            </p>
          </Segment>

          {/* <div id="Facebook-timeline" /> */}

          <Segment padded="very" vertical clearing>
            <Header as="h2">由緒</Header>
            <p style={{ fontSize: '1.33em' }}>
              当社は、
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B4%B2%E5%B4%8E%E6%B5%9C%E5%AE%AE%E7%A5%9E%E6%98%8E%E7%A5%9E%E7%A4%BE">
                洲崎濱宮神明神社（すざきはまみやしんめいじんじゃ）
              </OutboundLink>
              の境内社で海山道開運稲荷神社と称し、丁度、前社は伊勢の内宮さま、後社は外宮さまに当り、境内社の方が著名であるのは誠に尊いことです。
            </p>

            <Image src={miyamadosan} size="medium" floated="left" />
            <p style={{ fontSize: '1.33em' }}>
              俗に“みやまどさん”（総称海山道神社）とよばれるのは、伊勢路の伏見稲荷総社として高遠なる御神徳を称えて此の土地の地名で代称されているのです。
              その昔、西行の「昨日たち今日立ちみれば日永なる洲崎に見ゆる森のひとむら」と詠まれたと言うそのままの森は、神々しさ自ら身に迫る思いがします。
              また、江戸時代には徳川家のあつい崇敬により葵の御紋を許され、神戸侯を始め水谷検令（代官水谷九佐衛門）等からも崇められ、古くから全国崇敬者の信仰をあつめています。
            </p>
          </Segment>

          <Segment padded="very" vertical>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={`img/shinmeisha.jpg`} size="large" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h2">洲崎濱宮神明神社 御祭神</Header>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <List
                          style={{ fontSize: '1.33em' }}
                          items={[
                            '面足命',
                            '天照大御神',
                            '惶根神',
                            '仁徳天皇',
                            '建速須佐之男命',
                            '宇迦之御魂神',
                          ]}
                        />
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <List
                          style={{ fontSize: '1.33em' }}
                          items={[
                            '大山祇命',
                            '火之迦具土神',
                            '菅原道真公',
                            '火産霊神',
                            '保食神',
                            '倭姫命',
                          ]}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment padded="very" vertical>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={`img/torii-2875-1.jpg`} size="large" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h2">海山道開運稲荷神社 御祭神</Header>
                  <List
                    style={{ fontSize: '1.33em' }}
                    items={[
                      '倉稲魂神（うがのみたま）',
                      '大己貴命（おおなむちのみこと）',
                      '太田神（おおたのかみ） ',
                      '保食神（うけもちのかみ）',
                      '大宮能売神（おおみやのめのかみ）',
                    ]}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment padded="very" vertical>
            <Media query={{ maxWidth: 599 }}>
              {(matches) => (
                <Card.Group
                  centered
                  items={[
                    {
                      header: '大天神像（菅原道真公）',
                      meta: '日本一の大きさ',
                      image: 'img/tenjinzo.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/tenjinzo',
                    },
                    {
                      header: '狐の嫁入り神事',
                      meta: '節分の日',
                      image: 'img/setsubun-101.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/yomeiri',
                    },
                    {
                      header: '祭礼市（朔日市場）',
                      meta: '毎月1日',
                      image: '/img/saireiichi-3073.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/saireiichi',
                    },
                  ]}
                />
              )}
            </Media>
          </Segment>

          <Segment padded="very" vertical>
            <Header as="h2">境内案内</Header>
            <KeidaiContent />
          </Segment>

          <Segment padded="very" vertical>
            <Header as="h2">交通案内</Header>
            <GoogleMap />

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://www.kintetsu.co.jp/railway/rosen/A50006.html">
                  近鉄電車
                </OutboundLink>
                でお越しの場合
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E8%BF%91%E9%89%84%E5%90%8D%E5%8F%A4%E5%B1%8B%E7%B7%9A">
                近鉄名古屋線
              </OutboundLink>{' '}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%ÏE5%B1%B1%E9%81%93%E9%A7%85">
                海山道駅
              </OutboundLink>
              下車すぐ{'　'}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%E5%B1%B1%E9%81%93%E9%A7%85#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:KINTETSU_MIYAMADO_STA.JPG">
                改札西出口
              </OutboundLink>
              より徒歩３０秒
            </Segment>

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BC%8A%E5%8B%A2%E6%B9%BE%E5%B2%B8%E8%87%AA%E5%8B%95%E8%BB%8A%E9%81%93">
                  伊勢湾岸自動車道
                </OutboundLink>
                でお越しの場合
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%88%E5%B7%9D%E8%B6%8A%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
                みえ川越インターチェンジ
              </OutboundLink>
              下車{'　'}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%9323%E5%8F%B7">
                国道２３号
              </OutboundLink>
              津方面 ２０分
            </Segment>

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%90%8D%E9%98%AA%E5%9B%BD%E9%81%93">
                  名阪国道
                </OutboundLink>
                でお越しの場合
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BA%80%E5%B1%B1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
                亀山インターチェンジ
              </OutboundLink>
              下車{'　'}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%931%E5%8F%B7">
                国道1号
              </OutboundLink>
              四日市方面３０分
            </Segment>
          </Segment>

          {/* For mobile, show the Facebook here */}
          <Media
            query="(max-width: 991px)"
            render={() => (
              <>
                <Segment padded="very" vertical>
                  <Grid centered columns={2}>
                    <div>
                      <FacebookTimeline title="FacebookTimeline-mobile" />
                    </div>
                  </Grid>
                </Segment>
                <Segment vertical textAlign="center">
                  <SocialButtons />
                </Segment>
              </>
            )}
          />

          {relatedLinks.length > 0 && (
            <Segment padded="very" vertical>
              <Header as="h2">リンク</Header>
              <List bulleted horizontal>
                {relatedLinks.map((relatedLink, i) => (
                  <List.Item key={i}>
                    <OutboundLink href={relatedLink.href}>
                      {relatedLink.title}
                    </OutboundLink>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </div>

        {/* For desktop, show the Facebook sidebar. */}
        <Media
          query="(min-width: 992px)"
          render={() => (
            <div style={{ marginLeft: '1rem' }}>
              <FacebookTimeline title="FacebookTimeline-desktop" />
            </div>
          )}
        />
      </Container>
    </>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  relatedLinks: PropTypes.array,
};

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        relatedLinks={frontmatter.relatedLinks}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        relatedLinks {
          title
          href
        }
      }
    }
  }
`;
