import React from 'react';
import './section.scss';

export default function Section({ children, title, sectiondId }) {
  return (
    <section className="container section" id={sectiondId}>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
}
