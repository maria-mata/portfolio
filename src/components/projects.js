import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { createPortal } from 'react-dom';
import { graphql, useStaticQuery } from 'gatsby';
import Github from './icons/github';
import Modal from './modal';
import Open from './icons/open';
import Section from './section';
import Youtube from './icons/youtube';
import Video from './video';
import './projects.scss';

function Project({ project }) {
  const linkAttrs = {
    target: '_blank',
    rel: 'nofollow noopener noreferrer',
    className: 'styled-link',
  };

  // modal open/close state
  const [open, setOpen] = useState(false);

  return (
    <div className="project">
      <div className="project__image">
        <GatsbyImage 
          image={getImage(project.image.src)}
          src={project.image.src}
          alt={project.image.alt}
        />
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
              <li>
                <button className="skills__chip" onClick={() => setOpen(true)}>
                  <Youtube aria-hidden="true" />
                  <span>Demo</span>
                </button>
                {open && createPortal(
                  <Modal 
                    title={project.title} 
                    close={() => setOpen(false)}
                  >
                    <Video url={project.links.youtube} title={project.title} />
                  </Modal>,
                  document.getElementById('modal')
                )}
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
