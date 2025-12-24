import confession from '../Assets/Projects/confession.png';
import portfolio from '../Assets/Projects/portfolio.png';
import chat from '../Assets/Projects/chat.png';
import blog from '../Assets/Projects/blog.png';
import sorting from '../Assets/Projects/sorting.png';
import drum from '../Assets/Projects/drum.png';
import calculator from '../Assets/Projects/investment-calculator.jpg';
import conference from '../Assets/Projects/tech-conference.png';
import propertyPulse from '../Assets/Projects/PropertyPulse.png';
import netflix from '../Assets/Projects/netflix.png';
import developerDashboard from '../Assets/Projects/developer-dashboard.png';
import mealMate from '../Assets/Projects/MealMate.png';

const projectsData = [
  {
    title: 'PropertyPulse',
    imgPath: propertyPulse,
    technologies: ['Next.js', 'JavaScript', 'MongoDB', 'Tailwind CSS'],
    description:
      'A real-estate web app where users can search, bookmark, and explore rental properties on an interactive map. Includes social sharing, messaging, and personalized notifications.',
    link: 'https://property-pulse-lime.vercel.app/',
  },
  {
    title: 'MovieflixGPT',
    imgPath: netflix,
    technologies: ['React', 'Redux', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    description:
      'A movie streaming platform with authentication, smart recommendations, and category-wise browsing.',
    link: 'https://movieflix-gpt-ritu.netlify.app/',
  },
  {
    title: 'MealMate',
    imgPath: mealMate,
    technologies: ['React', 'Context API', 'JavaScript', 'Tailwind CSS'],
    description:
      'A food ordering app with restaurant listings, menus, and real-time cart management.',
    link: 'https://github.com/rituraj2084/Meal-Mate',
  },
  {
    title: 'DevDynamics',
    imgPath: developerDashboard,
    technologies: ['React', 'Chart.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'Dashboard visualizing developer activities with interactive charts, filters, and summary stats.',
    link: 'https://developer-dashboard-ritu.netlify.app/',
  },
  {
    title: 'Investment Calculator',
    imgPath: calculator,
    technologies: ['React', 'Context API', 'CSS'],
    description:
      'A financial planning tool that calculates investment returns in real time with a clean UI.',
    link: 'https://investment-calculator-ritu.netlify.app/',
  },
  {
    title: 'MNIT Confession Website',
    imgPath: confession,
    technologies: [
      'React',
      'EJS',
      'Bootstrap',
      'Node.js',
      'Express',
      'Passport.js',
      'MongoDB',
    ],
    description:
      'An anonymous confession platform with Google OAuth authentication and MongoDB storage.',
    link: 'https://mnit-confession.cyclic.app/',
  },
  {
    title: 'Portfolio',
    imgPath: portfolio,
    technologies: ['React', 'Bootstrap'],
    description:
      'A responsive personal portfolio showcasing skills, projects, and experience.',
    link: 'https://rituraj-mnit.netlify.app/',
  },
  {
    title: 'Real Time Chat App',
    imgPath: chat,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Socket.io'],
    description:
      'A real-time messaging application using Socket.io for instant communication.',
    link: 'https://github.com/rituraj2084/Chat-App',
  },
  {
    title: 'Blog Website',
    imgPath: blog,
    technologies: ['EJS', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    description:
      'A full-stack blogging platform supporting CRUD operations for blog posts.',
    link: 'https://blog-web-ritu.cyclic.app/',
  },
  {
    title: 'Sorting Visualiser',
    imgPath: sorting,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'An interactive visualization of popular sorting algorithms.',
    link: 'https://rituraj2084.github.io/Sorting-Visualizer/',
  },
  {
    title: 'Tech Conference',
    imgPath: conference,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A responsive website showcasing conference speakers, agenda, and registration.',
    link: 'https://rituraj2084.github.io/Tech-Conference/',
  },
  {
    title: 'Drum Kit',
    imgPath: drum,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    description:
      'An interactive drum kit allowing users to play sounds via clicks or keypresses.',
    link: 'https://rituraj2084.github.io/drum-kit/',
  },
];

export default projectsData;
