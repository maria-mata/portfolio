import React, { } from 'react';
import Section from './section';
import { graphql, useStaticQuery } from 'gatsby';
import './about.scss';

// TODO: figure out mobile image resizing with JS

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
      </div>
    </Section>
  );
}
