import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import './hero.scss';

export default function Hero() {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/hero.md/" }) {
        html
      }
    }`);
  const { html } = markdownRemark;

  return (
    <section className="hero">
      <div className="hero__image">
        <StaticImage 
          src="../images/mata-mariajose-headshot.jpg"
          alt="Maria Jose Mata, Software Engineer"
          layout="fixed"
          width={250}
          height={250}
        />
      </div>
      <div
        className="hero__content"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    </section>
  );
}
