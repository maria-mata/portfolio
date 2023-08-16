import React, { } from 'react';
import Section from './section';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="about__image">
        <StaticImage />
      </div>
    </Section>
  );
}
