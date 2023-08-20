import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Skills from '../components/skills';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
    </Layout>
  )
}

export const Head = () => <title>Maria Jose Mata, Software Engineer</title>

export default IndexPage
