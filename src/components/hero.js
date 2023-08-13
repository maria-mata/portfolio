import React from 'react';
import { Link } from 'gatsby';
import './hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <h1><span aria-label="hello">👋</span> I'm Maria,</h1>
      <h2>I build beautiful and accessible products</h2>
      <p>Welcome to my website, where I share some of my work focused on helping people do their best work. I'm currently searching for my next remote role and have outlined <Link>a few reasons</Link> why you may want me on your team. Let's connect!</p>
    </section>
  );
}
