import cityBlock from '../assets/city-block.png'
import dreamCatcher from '../assets/dream-catcher.png'
import skillLink from '../assets/skill-link.png'
import fridgeToTable from '../assets/fridge-to-table.png'

const projectsList = [
  {
    name: 'cityBlock',
    description: 'Community funded urban development, powered by blockchain.',
    tech: ['Vue', 'Bulma', 'Ethereum', 'Solidity', 'Truffle', 'Web3',
    'Node', 'Express', 'Knex', 'PostgreSQL', 'Heroku'],
    github: 'https://github.com/block-squad/city-block-client',
    live: 'https://mjmata.com/city-block',
    image: cityBlock,
    alt: 'city-block'
  },
  {
    name: 'Dream Catcher',
    description: 'A journal for your dreams.',
    tech: ['jQuery', 'Handlebars', 'Bootstrap', 'Node',
    'Express', 'Knex', 'PostgreSQL', 'Heroku'],
    github: 'https://github.com/maria-mata/dream-catcher',
    live: 'https://mjmata.com/dream-catcher',
    image: dreamCatcher,
    alt: 'dream-catcher'
  },
  {
    name: 'Skill Link',
    description: 'Mentor pairing application for individuals with tech skills.',
    tech: ['jQuery', 'Materialize', 'Amazon S3', 'Node','Express', 'Knex',
    'PostgreSQL', 'Heroku', 'Firebase'],
    github: 'https://github.com/maria-mata/skill-link',
    live: 'https://mjmata.com/skill-link',
    image: skillLink,
    alt: 'skill-link'
  },
  {
    name: 'Fridge to Table',
    description: 'Search, browse, and save recipes based on ingredients you have on hand.',
    tech: ['jQuery', 'Materialize','Firebase', 'Edamam API'],
    github: 'https://github.com/maria-mata/fridge-to-table',
    live: 'https://mjmata.com/fridge-to-table',
    image: fridgeToTable,
    alt: 'fridge-to-table'
  }
]

export default projectsList;
