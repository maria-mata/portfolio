import React from 'react';
import './section.scss';

export default function Section({ children, title, sectiondId, className = '' }) {
  let style = 'section';
  if (className) {
    style+= ` ${className}`;
  }

  return (
    <section className={style} id={sectiondId}>
      { title && (
        <h2 className="section__title">{title}</h2>
      )}
      {children}
    </section>
  );
}
