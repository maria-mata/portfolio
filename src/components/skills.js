import React from 'react';
import Accessibility from './icons/accessibility';
import Browser from './icons/browser';
import CSS from './icons/css';
import Checkbox from './icons/checkbox';
import Docker from './icons/docker';
import Git from './icons/git';
import HTMLIcon from './icons/html'
import JS from './icons/js';
import Phone from './icons/phone';
import ReactIcon from './icons/react';
import Sass from './icons/sass';
import Section from './section';
import Server from './icons/server';
import Terminal from './icons/terminal';
import Vue from './icons/vue';
import './skills.scss';

const skills = [
  {
    name: 'JavaScript',
    icon: JS,
  },
  {
    name: 'React',
    icon: ReactIcon,
  },
  {
    name: 'Vue',
    icon: Vue,
  },
  {
    name: 'HTML',
    icon: HTMLIcon,
  },
  {
    name: 'CSS',
    icon: CSS,
  },
  {
    name: 'Sass',
    icon: Sass,
  },
  {
    name: 'Responsive Design',
    icon: Phone,
  },
  {
    name: 'Web Accessibility',
    icon: Accessibility,
  },
  {
    name: 'Unit Testing',
    icon: Checkbox,
  },
  {
    name: 'Frontend Development',
    icon: Browser,
  },
  {
    name: 'Fullstack Development',
    icon: Server,
  },
  {
    name: 'CLI',
    icon: Terminal,
  },
  {
    name: 'Git',
    icon: Git,
  },
  {
    name: 'Docker',
    icon: Docker,
  },
];

function Skill({ name, icon: Icon }) {
  return (
    <li>
      <Icon aria-hidden="true" />
      <span>{name}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <Section title="Skills" sectiondId="skills">
      <p>These are the languages, tools, and techniques I use most frequently. However, I'm always interested in learning new skills and selecting the optimal tools for each task.</p>
      <ul className="skills">
        { skills.map(skill => <Skill key={skill.name} {...skill} />) }
      </ul>
    </Section>
  )
}
