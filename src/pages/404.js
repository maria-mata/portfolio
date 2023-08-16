import * as React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import ImageWrapper from '../components/imageWrapper';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage = () => {
  return (
    <Layout>
      <Section sectionId="not-found" title="Uh oh" className="section--narrow">
          <p>You just hit a route that doesn't exist... the sadness.</p>
          <ImageWrapper>
            <StaticImage 
              src="../images/cookie-the-pom-unsplash.jpg"
              alt="Image of a dog with a laptop"
            />
          </ImageWrapper>
          <small>
            Photo by <a href="https://unsplash.com/@cookiethepom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Cookie the Pom</a> on <a href="https://unsplash.com/photos/siNDDi9RpVY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Unsplash</a>
          </small>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>404 | Maria Jose Mata, Software Engineer</title>
