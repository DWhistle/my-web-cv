
const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Multithreading',
    competency: 2,
    category: ['Concepts']
  },
  {
    title: 'Design Patterns',
    competency: 3,
    category: ['Concepts']
  },
  {
    title: 'Database Design',
    competency: 4,
    category: ['Concepts']
  },
  {
    title: 'Application Design',
    competency: 4,
    category: ['Concepts']
  },
  {
    title: 'Spring Core',
    competency: 4,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Spring Data',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Spring MVC',
    competency: 4,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Spring Boot',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Spring JDBC',
    competency: 4,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Shell',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'RabbitMQ',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Microsoft SQLServer',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'SQLAlchemy',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Python', 'Data'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Maven',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Gradle',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data', 'Python'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 2,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
