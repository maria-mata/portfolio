import cityBlock from '../assets/city-block.png'
import dreamCatcher from '../assets/dream-catcher.png'
import skillLink from '../assets/skill-link.png'
import fridgeToTable from '../assets/fridge-to-table.png'
import moodpix from '../assets/moodpix.png'

const projectsList = [
  {
    name: 'Moodpix',
    description: 'Algorithmically generated abstract SVG art, influenced by sentiment analysis.',
    tech: ['Vue.js', 'JavaScript', 'SVG.js', 'Bulma', 'Watson Tone Analyzer',
    'Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Heroku', 'Firebase'],
    github: 'https://github.com/maria-mata/moodpix',
    live: 'https://moodpix.mjmata.com/',
    image: moodpix,
    alt: 'moodpix'
  },
  {
    name: 'cityBlock',
    description: 'Community funded urban development, powered by blockchain.',
    tech: ['Vue.js', 'JavaScript', 'Bulma', 'Ethereum', 'Solidity', 'Truffle.js', 'Web3.js',
    'Node.js', 'Express', 'Knex.js', 'PostgreSQL', 'Heroku'],
    github: 'https://github.com/block-squad/city-block-client',
    live: 'http://city-block.herokuapp.com/#/',
    image: cityBlock,
    alt: 'city-block'
  },
  {
    name: 'Dream Catcher',
    description: 'A journal for your dreams.',
    tech: ['jQuery', 'Handlebars', 'Bootstrap', 'Node.js',
    'Express', 'Knex.js', 'PostgreSQL', 'Heroku'],
    github: 'https://github.com/maria-mata/dream-catcher',
    live: 'http://dream-catcher.mjmata.com/',
    image: dreamCatcher,
    alt: 'dream-catcher'
  },
  {
    name: 'Skill Link',
    description: 'Mentor pairing application for individuals with tech skills.',
    tech: ['jQuery', 'Materialize', 'Amazon S3', 'Node.js','Express', 'Knex.js',
    'PostgreSQL', 'Heroku', 'Firebase'],
    github: 'https://github.com/maria-mata/skill-link',
    live: 'https://skill-link.mjmata.com/',
    image: skillLink,
    alt: 'skill-link'
  },
  {
    name: 'Fridge to Table',
    description: 'Search, browse, and save recipes based on ingredients you have on hand.',
    tech: ['jQuery', 'Materialize','Firebase', 'Edamam API'],
    github: 'https://github.com/maria-mata/fridge-to-table',
    live: 'https://fridge-to-table.mjmata.com/',
    image: fridgeToTable,
    alt: 'fridge-to-table'
  }
]

export default projectsList;
