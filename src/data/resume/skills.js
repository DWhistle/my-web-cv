const skills = [
  {
    title: "Java",
    competency: 5,
    category: ["Languages"],
  },
  {
    title: "Scala",
    competency: 4,
    category: ["Languages"],
  },
  {
    title: "Go",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "Kafka",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "Zookeeper",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Cloud solutions",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Multithreading",
    competency: 4,
    category: ["Concepts"],
  },
  {
    title: "Database Design",
    competency: 3,
    category: ["Concepts"],
  },
  {
    title: "Distributed computing",
    competency: 4,
    category: ["Concepts"],
  },
  {
    title: "Application Design",
    competency: 5,
    category: ["Concepts"],
  },
  {
    title: "Spring",
    competency: 4,
    category: ["Java"],
  },
  {
    title: "Python",
    competency: 5,
    category: ["Languages"],
  },
  {
    title: "Shell",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "Redis",
    competency: 4,
    category: ["Databases"],
  },
  {
    title: "RabbitMQ",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "NoSQL",
    competency: 3,
    category: ["Databases"],
  },
  {
    title: "SQL",
    competency: 5,
    category: ["Databases"],
  },
  {
    title: "Flask",
    competency: 4,
    category: ["Python"],
  },
  {
    title: "Django",
    competency: 3,
    category: ["Python"],
  },
  {
    title: "SQLAlchemy",
    competency: 3,
    category: ["Python"],
  },
  {
    title: "Pandas",
    competency: 3,
    category: ["Python"],
  },
  {
    title: "Git",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "Maven",
    competency: 4,
    category: ["Java"],
  },
  {
    title: "Gradle",
    competency: 2,
    category: ["Java"],
  },
  {
    title: "C++",
    competency: 2,
    category: ["Languages"],
  },
  {
    title: "C",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "JavaScript",
    competency: 2,
    category: ["Languages"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
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
