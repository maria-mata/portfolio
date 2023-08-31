import React from 'react';
import Section from './section';
import Github from './icons/github';
import Youtube from './icons/youtube';
import Open from './icons/open';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import './projects.scss';

function Project({ project }) {
  const linkAttrs = {
    target: '_blank',
    rel: 'nofollow noopener noreferrer',
    className: 'styled-link',
  };

  return (
    <div className="project">
      <div className="project__image">
        <a href={project.image.linkTo}>
          <GatsbyImage 
            image={getImage(project.image.src)}
            src={project.image.src}
            alt={project.image.alt}
          />
        </a>
      </div>
      <div className="project__content">
        <div className="project__type">{project.type}</div>
        <h3>{project.title}</h3>
        <div className="project__blurb">
          <p>{project.description}</p>

          <ul className="project__links">
            {project.links.github && (
              <li className="skills__chip">
                <a {...linkAttrs} href={project.links.github}>
                  <Github aria-hidden="true" />
                  <span>Code</span>
                </a>
              </li>
            )}
            {project.links.youtube && (
              <li className="skills__chip">
                <a {...linkAttrs} href={project.links.youtube}>
                  <Youtube aria-hidden="true" />
                  <span>Demo</span>
                </a>
              </li>
            )}
            {project.links.external && (
              <li className="skills__chip">
                <a {...linkAttrs} href={project.links.external}>
                  <Open aria-hidden="true" />
                  <span>Read more</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { allProjectsJson } = useStaticQuery(graphql`
    query {
      allProjectsJson {
        projects: nodes {
          title
          type
          description
          image {
            src {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  layout: CONSTRAINED
                  width: 400
                  height: 300
                )
              }
            }
            alt
            linkTo
          }
          tags
          links {
            youtube
            external
          }
        }
      }
    }
  `);

  const { projects } = allProjectsJson;

  return (
    <Section title="Projects" sectiondId="projects">
      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </Section>
  );
}
