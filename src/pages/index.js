import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Skills from '../components/skills';
import Seo from '../components/seo';
import Projects from '../components/projects';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}

export const Head = () => (<Seo />);

export default IndexPage
