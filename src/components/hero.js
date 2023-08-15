import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <StaticImage 
          src="../images/mata-mariajose-headshot.jpeg"
          alt="Maria Jose Mata, Software Engineer"
          layout="fixed"
          width={250}
          height={250}
        />
      </div>
      <div className="hero__content">
        <h1>I'm Maria <span aria-label="Hello">👋</span></h1>
        <h2>I build beautiful, responsive and accessible web products</h2>
        <p>Welcome to my portfolio site. I'm currently searching for my next remote role and have outlined <Link>a few reasons</Link> why you may want me on your team. Let's connect!</p>
      </div>
    </section>
  );
}
