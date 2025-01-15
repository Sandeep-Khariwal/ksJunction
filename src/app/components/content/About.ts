export interface CourseType {
  image: string;
  tittle: string;
  desc: string;
  duration?: string;
  fees?: string;
}

const Course: CourseType[] = [
  {
    image: "/web.jpg",
    tittle: "Web Development",
    desc: "Learn to build full-stack web applications with the MERN stack (MongoDB, Express, React, Node.js). Master front-end and back-end development, REST APIs, authentication, and deployment in this practical course.",
    duration: "1 year",
    fees: "3k/month",
  },
  {
    image: "/appDev.png",
    tittle: "App Development",
    desc: "Learn to develop mobile applications using modern frameworks like React Native. Build cross-platform apps for iOS and Android with features like navigation, state management, and API integration.",
    duration: "1 year",
    fees: "4k/month",
  },
  {
    image: "/ai.jpg",
    tittle: "AI & ML",
    desc: "Learn Artificial Intelligence (AI) and Machine Learning (ML) through comprehensive online courses. Master algorithms, data analysis, deep learning, and practical applications to build intelligent systems and predictive models.",
    duration: "1 year",
    fees: "4k/month",
  },
  {
    image: "/ds.jpg",
    tittle: "Data Science",
    desc: "Master Data Science with online courses. Learn data analysis, visualization, statistics, machine learning, and data-driven decision making using Python, R, and powerful tools like Pandas and TensorFlow.",
    duration: "1 year",
    fees: "4k/month",
  },
  {
    image: "/app.webp",
    tittle: "Basic computer",
    desc: "Master essential computer skills with online courses. Learn to use Notepad, Microsoft Word, Excel, MS Office, and typing skills for efficient work and productivity. Perfect for beginners and professionals.",
    duration: "3 - 4 months",
    fees: "1.5k/month",
  },
  {
    image: "/tools.webp",
    tittle: "Tools we use in app",
    desc: "Explore Git for version control, GitHub for collaboration, MongoDB Atlas for cloud databases, and website hosting. Master coding in VS Code and see how these tools integrate for efficient web development.",
  },
];

export default Course;
