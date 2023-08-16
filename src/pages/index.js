import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

export const Head = () => <title>Maria Jose Mata, Software Engineer | Home</title>

export default IndexPage
