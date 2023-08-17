import React, { } from 'react';
import Section from './section';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ImageWrapper from './imageWrapper';
import './about.scss';

export default function About() {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
        html
      }
    }`);
  const { html } = markdownRemark;

  return (
    <Section title="About" sectiondId="about">
      <div className="about">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          <ImageWrapper>
            <StaticImage 
              src="../images/sunrise-longs-peak.jpg"
              alt="Sunrise at Longs Peak, Colorado."
            />
          </ImageWrapper>
          <small>Photo by Greg.</small>
        </div>
      </div>
    </Section>
  );
}
