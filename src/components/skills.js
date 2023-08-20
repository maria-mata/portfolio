import React from 'react';
import Accessibility from '../icons/accessibility';
import Browser from '../icons/browser';
import CSS from '../icons/css';
import Checkbox from '../icons/checkbox';
import Docker from '../icons/docker';
import Git from '../icons/git';
import HTMLIcon from '../icons/html'
import JS from '../icons/js';
import Phone from '../icons/phone';
import ReactIcon from '../icons/react';
import Sass from '../icons/sass';
import Section from './section';
import Server from '../icons/server';
import Terminal from '../icons/terminal';
import Vue from '../icons/vue';
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
    name: 'Web Accessibility',
    icon: Accessibility,
  },
  {
    name: 'Responsive Design',
    icon: Phone,
  },
  {
    name: 'Front-end Development',
    icon: Browser,
  },
  {
    name: 'Full-stack Development',
    icon: Server,
  },
  {
    name: 'Unit Testing',
    icon: Checkbox,
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
      <Icon />
      <span>{name}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <Section title="Skills" sectiondId="skills">
      <p>These are the languages, tools, and techniques I work with the most, but I'm always interested in learning new things and choosing the most appropriate tool for a task.</p>
      <ul className="skills">
        { skills.map(skill => <Skill key={skill.name} {...skill} />) }
      </ul>
    </Section>
  )
}
