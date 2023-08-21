import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Section from './section';
import Github from './icons/github';
import Linkedin from './icons/linkedin';
import Email from './icons/email';
import './hero.scss';

export default function Hero() {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/hero.md/" }) {
        html
      }
    }`);
  const { html } = markdownRemark;

  const linkAttrs = {
    target: '_blank',
    rel: 'nofollow noopener noreferrer',
    className: 'styled-link',
  };

  return (
    <Section sectiondId="hero">
      <div className="hero">
        <div className="hero__image">
          <StaticImage 
            src="../images/mata-mariajose-headshot.jpg"
            alt="Maria Jose Mata, Software Engineer"
            width={250}
            height={250}
          />
        </div>
        <div className="hero__content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className="hero__links">
            <a {...linkAttrs} href="https://www.linkedin.com/in/mjmata/" aria-label="LinkedIn">
              <Linkedin aria-hidden="true" />
              <span>
                LinkedIn
              </span>
            </a>
            <a {...linkAttrs} href="https://github.com/maria-mata" aria-label="GitHub">
              <Github aria-hidden="true" />
              <span>
                GitHub
              </span>
            </a>
            <Link aria-label="Contact" className="styled-link" to="/contact">
              <Email aria-hidden="true" />
              <span>
                Message
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
