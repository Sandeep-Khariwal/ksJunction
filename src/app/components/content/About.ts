export interface CourseType {
  id:number;
  image: string;
  tittle: string;
  desc: string;
  duration?: string;
  fees?: string;
  data?:string
}

const Course: CourseType[] = [
  {
    id:1,
    image: "/web.jpg",
    tittle: "Web Development",
    desc: "Learn to build full-stack web applications with the MERN stack (MongoDB, Express, React, Node.js). Master front-end and back-end development, REST APIs, authentication, and deployment in this practical course.",
    duration: "1 year",
    fees: "3k/month",
    data: `
    <section id="web-development-course" class="max-w-7xl mx-auto px-4 py-8">
<h1 class="text-lg lg:text-2xl font-extrabold text-center text-pink-500 mb-8">Web Development with MERN Stack, Redux, and TailwindCSS</h1>

<h2 class="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Unlock the Power of Modern Web Development</h2>
<p class="text-lg text-gray-600 mb-6">
Welcome to our <strong class="text-pink-500">MERN Stack</strong> Web Development course! Whether you're a beginner looking to start your web development journey or an experienced developer looking to enhance your skills, this course will give you all the tools and knowledge you need.
</p>

<h3 class="text-lg lg:text-2xl font-medium text-gray-800 mb-4">What is MERN Stack?</h3>
<p class="text-lg text-gray-600 mb-4">
<strong class="text-pink-500">MERN</strong> stands for <strong class="text-pink-500">MongoDB</strong>, <strong class="text-pink-500">Express.js</strong>, <strong class="text-pink-500">React</strong>, and <strong class="text-pink-500">Node.js</strong>—four powerful technologies that together form a robust and scalable web development stack. By mastering MERN, you'll be able to build dynamic, full-stack web applications.
</p>
<ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
<li><strong>MongoDB</strong>: A NoSQL database that stores data in a flexible, JSON-like format.</li>
<li><strong>Express.js</strong>: A backend web framework for Node.js, helping you build fast and secure web APIs.</li>
<li><strong>React</strong>: A powerful JavaScript library for building interactive user interfaces.</li>
<li><strong>Node.js</strong>: A JavaScript runtime for building fast and scalable backend applications.</li>
</ul>

<h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Learn Redux?</h3>
<p class="text-lg text-gray-600 mb-4">
<strong class="text-pink-500">Redux</strong> is a state management tool for JavaScript applications, especially helpful when working with React. It helps you manage the state of your application in a predictable way, making your code easier to maintain and debug. You'll learn how to manage user input, API responses, and complex UI states efficiently with Redux.
</p>
<ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
<li><strong>Centralized State</strong>: All your app's data is stored in one place, making it easier to access and update.</li>
<li><strong>Predictable State Updates</strong>: With Redux, your state changes are predictable, helping you avoid bugs and making your app easier to debug.</li>
<li><strong>Improved Scalability</strong>: As your application grows, Redux will help you manage more complex data and states across different parts of the application.</li>
</ul>

<h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Stylish Web Design with TailwindCSS</h3>
<p class="text-lg text-gray-600 mb-4">
Learn how to design modern, responsive, and beautiful user interfaces using <strong class="text-pink-500">TailwindCSS</strong>. TailwindCSS is a utility-first CSS framework that allows you to build custom designs quickly and efficiently. Instead of writing complex CSS from scratch, you can use pre-built classes to style elements directly in your HTML or JSX.
</p>
<ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
<li><strong>Utility-First</strong>: Tailwind provides utility classes that let you style elements quickly without writing custom CSS.</li>
<li><strong>Responsive Design</strong>: Easily create mobile-friendly websites with Tailwind’s built-in responsive design utilities.</li>
<li><strong>Customizable</strong>: Tailwind is fully customizable, so you can create a design that fits your project perfectly.</li>
</ul>

<h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">What You Will Learn</h3>
<p class="text-lg text-gray-600 mb-4">In this course, you'll master the key skills needed to become a full-stack web developer:</p>
<ul class="list-disc pl-6 space-y-2 text-lg text-gray-600 mb-6">
<li><strong>Frontend Development (React + TailwindCSS)</strong>:
  <ul class="list-inside list-disc text-gray-600">
    <li>Building interactive and dynamic UIs with React.</li>
    <li>Using React hooks and components to manage application state and lifecycle.</li>
    <li>Designing responsive, modern UIs with TailwindCSS.</li>
  </ul>
</li>
<li><strong>Backend Development (Node.js + Express.js)</strong>:
  <ul class="list-inside list-disc text-gray-600">
    <li>Creating RESTful APIs using Express.js.</li>
    <li>Managing databases with MongoDB and performing CRUD operations.</li>
    <li>Authentication and authorization with JWT (JSON Web Tokens).</li>
  </ul>
</li>
<li><strong>State Management with Redux</strong>:
  <ul class="list-inside list-disc text-gray-600">
    <li>Understanding and implementing state management in large-scale applications.</li>
    <li>Using Redux to manage state across your app, ensuring consistency and predictability.</li>
    <li>Connecting React components to Redux and dispatching actions.</li>
  </ul>
</li>
</ul>

<h3 class="ttext-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Choose Our Course?</h3>
<ul class="list-disc pl-6 space-y-2 text-lg text-gray-600 mb-6">
<li><strong>Hands-On Projects</strong>: We believe in learning by doing. You'll work on real-world projects that you can showcase to potential employers.</li>
<li><strong>Experienced Instructors</strong>: Our instructors have years of experience in web development and will guide you through each concept step-by-step.</li>
<li><strong>Comprehensive Curriculum</strong>: From basic concepts to advanced techniques, we cover everything you need to know to become a full-stack developer.</li>
<li><strong>Flexible Learning</strong>: Learn at your own pace with our self-paced, online course. Watch video lessons, complete assignments, and ask questions anytime.</li>
<li><strong>Career Support</strong>: After completing the course, we’ll help you with resume building, interview preparation, and job opportunities.</li>
</ul>

<h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">What You Will Build</h3>
<p class="text-lg text-gray-600 mb-4">By the end of this course, you will have the skills to build a <strong>full-stack web application</strong> with:</p>
<ul class="list-disc pl-6 space-y-2 text-lg text-gray-600 mb-6">
<li>User authentication (sign up, login, password reset).</li>
<li>A dashboard or admin panel with CRUD functionality.</li>
<li>Real-time updates (e.g., chat application or live data feed).</li>
<li>Responsive designs that look great on any device.</li>
</ul>

<h2 class="text-lg lg:text-2xl font-semibold text-center text-pink-500 mt-8 mb-4">Start Your Web Development Journey Today</h2>
<p class="text-lg text-gray-600 mb-6 text-center">
Ready to become a full-stack developer and build modern web applications with the latest technologies? Join our <strong>MERN Stack, Redux, and TailwindCSS</strong> course today and start building your dream projects!
</p>

<div class="text-center mt-8">
<a  href="tel:+919416059799" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Enroll Now </a>
</div>
</section>

    `,
  
  },
  {
    id:2,
    image: "/appDev.png",
    tittle: "App Development",
    desc: "Learn to develop mobile applications using modern frameworks like React Native. Build cross-platform apps for iOS and Android with features like navigation, state management, and API integration.",
    duration: "1 year",
    fees: "4k/month",
    data: `
    <section id="mobile-app-development-course" class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="text-xl lg:text-2xl font-extrabold text-center text-pink-500 mb-8">Mobile Application Development: Build High-Quality Apps for Android & iOS</h1>

        <h2 class="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Unlock the Potential of Mobile App Development</h2>
        <p class="text-lg text-gray-600 mb-6">
          Mobile applications have become an integral part of our daily lives, and developers who can create high-quality mobile apps are in demand. In this course, you'll learn how to develop mobile applications for both Android and iOS using popular frameworks and technologies. Whether you're looking to build simple apps or complex, feature-rich mobile applications, this course is designed to provide you with all the skills you need to succeed.
        </p>

        <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mb-4">What Will You Learn?</h3>
        <p class="text-lg text-gray-600 mb-4">
          Throughout this course, you will gain hands-on experience in the following areas:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li>Designing mobile-first, responsive apps with a focus on user experience (UX) and user interface (UI).</li>
          <li>Building apps for both Android and iOS using popular frameworks like React Native and Flutter.</li>
          <li>Integrating APIs and third-party services to enhance app functionality (e.g., authentication, payments, and notifications).</li>
          <li>Understanding mobile app architecture and working with databases and local storage.</li>
          <li>Deploying and publishing apps on the Google Play Store and Apple App Store.</li>
        </ul>

        <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Popular Mobile Development Frameworks: React Native & Flutter</h3>
        <p class="text-lg text-gray-600 mb-4">
          You will learn how to use two of the most popular cross-platform mobile development frameworks:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li><strong>React Native</strong>: A framework developed by Facebook that allows you to build native mobile apps using JavaScript and React. With React Native, you can write apps that run on both Android and iOS without needing separate codebases.</li>
          <li><strong>Flutter</strong>: A UI toolkit developed by Google for building natively compiled applications. It uses Dart programming language and offers great flexibility, rich widgets, and fast performance.</li>
        </ul>

        <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Choose React Native or Flutter?</h3>
        <p class="text-lg text-gray-600 mb-4">
          Both frameworks offer a variety of advantages that will help you build apps faster and more efficiently:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li><strong>Cross-Platform Development</strong>: With React Native and Flutter, you can create apps that work on both Android and iOS from a single codebase, saving time and effort.</li>
          <li><strong>Performance</strong>: These frameworks provide near-native performance for both platforms, ensuring your apps run smoothly on a wide range of devices.</li>
          <li><strong>Hot Reloading</strong>: Both frameworks allow for hot reloading, which enables faster iteration and debugging, reducing development time.</li>
          <li><strong>Rich Ecosystem</strong>: Access a large set of pre-built components, libraries, and plugins that help you build complex features easily and quickly.</li>
        </ul>

        <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Understanding Mobile App Architecture</h3>
        <p class="text-lg text-gray-600 mb-4">
          In this course, you'll also learn about the underlying architecture of mobile applications. This includes understanding how to structure your app, manage state, handle navigation, and work with databases and APIs. Key concepts include:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li>State Management: Learn how to manage the state of your app effectively using tools like Redux or the built-in state management systems of React Native and Flutter.</li>
          <li>Navigation: Implement app navigation using stack, tab, and drawer navigators to create smooth transitions between screens.</li>
          <li>Local Storage & Databases: Work with local storage solutions like SQLite, Firebase, or Realm to persist data in your apps.</li>
          <li>API Integration: Learn how to interact with RESTful APIs to fetch and send data to a backend server.</li>
        </ul>

        <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">App Deployment and Distribution</h3>
        <p class="text-lg text-gray-600 mb-4">
          Once your app is ready, you'll learn how to deploy and distribute it to the app stores. This includes:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li><strong>Google Play Store</strong>: Publish your app to the Google Play Store for Android users, including configuring build settings, signing the APK, and meeting the app store guidelines.</li>
          <li><strong>Apple App Store</strong>: Submit your app to the Apple App Store for iOS users, including setting up your app in Xcode, configuring certificates, and dealing with App Store Connect.</li>
          <li><strong>App Updates</strong>: Learn how to manage app updates and bug fixes through the app store submission process.</li>
        </ul>

        <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">What You Will Build</h3>
        <p class="text-lg text-gray-600 mb-4">
          By the end of this course, you will have the skills to create fully functional mobile applications. Some of the projects you will build include:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li>A to-do list app with local storage and user authentication.</li>
          <li>A weather app that fetches data from an external API.</li>
          <li>A chat app with real-time communication using Firebase.</li>
          <li>A food delivery app with integration to external APIs for menu and order details.</li>
        </ul>

        <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Choose Our Course?</h3>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600 mb-6">
          <li><strong>Hands-On Learning</strong>: Build real mobile applications from day one, giving you practical experience that will make you job-ready.</li>
          <li><strong>Expert Guidance</strong>: Learn from instructors with years of experience in mobile app development. Get expert guidance on every aspect of the development process.</li>
          <li><strong>Comprehensive Curriculum</strong>: From basic app creation to complex integrations and deployments, we cover it all.</li>
          <li><strong>Job-Ready Skills</strong>: By the end of this course, you’ll be able to create, deploy, and manage mobile apps, ready for the job market.</li>
          <li><strong>Support and Resources</strong>: Access resources like documentation, coding examples, and direct support to help you through every stage of learning.</li>
        </ul>

        <h2 class="text-lg lg:text-2xl font-semibold text-center text-pink-500 mt-8 mb-4">Start Your Mobile Development Journey Today</h2>
        <p class="text-lg text-gray-600 mb-6 text-center">
          Ready to take your skills to the next level and start building high-performance mobile apps? Join our <strong>Mobile Application Development</strong> course today and create amazing apps for Android and iOS.
        </p>

        <div class="text-center mt-8">
          <a href="tel:+919416059799" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Enroll Now</a>
        </div>
      </section>
  `
  },
  {
    id:3,
    image: "/ai.jpg",
    tittle: "AI & ML",
    desc: "Learn Artificial Intelligence (AI) and Machine Learning (ML) through comprehensive online courses. Master algorithms, data analysis, deep learning, and practical applications to build intelligent systems and predictive models.",
    duration: "1 year",
    fees: "4k/month",
    data:`
    <section id="ai-ml-course" class="max-w-7xl mx-auto px-4 py-8">
  <h1 class="text-lg lg:text-2xl font-extrabold text-center text-pink-500 mb-8">AI & Machine Learning: Master the Future of Technology</h1>
  
  <h2 class="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Unlock the Power of Artificial Intelligence and Machine Learning</h2>
  <p class="text-lg text-gray-600 mb-6">
    Artificial Intelligence (AI) and Machine Learning (ML) are at the forefront of technological innovation. They are transforming the way we interact with the world, from self-driving cars to intelligent assistants like Siri and Alexa. In this course, you’ll gain a deep understanding of the core concepts and algorithms behind AI & ML. Whether you want to create smart systems or solve real-world problems, AI & ML can help you achieve your goals.
  </p>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mb-4">What Will You Learn in This Course?</h3>
  <p class="text-lg text-gray-600 mb-4">
    By the end of this course, you’ll be able to apply AI and ML techniques to real-world problems, build machine learning models, and understand how to work with cutting-edge tools in AI. Here’s what you will learn:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li>Introduction to AI & ML concepts and their real-world applications.</li>
    <li>Understand the different types of machine learning: supervised, unsupervised, and reinforcement learning.</li>
    <li>Learn how to build, train, and evaluate machine learning models using popular libraries like Scikit-learn, TensorFlow, and Keras.</li>
    <li>Implement algorithms like linear regression, decision trees, and neural networks to make predictions from data.</li>
    <li>Explore deep learning, natural language processing (NLP), and computer vision techniques in AI.</li>
    <li>Work with large datasets, preprocess data, and implement feature engineering techniques for better model performance.</li>
    <li>Learn how to deploy machine learning models and integrate them into production environments.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Is AI & ML Important?</h3>
  <p class="text-lg text-gray-600 mb-4">
    AI and ML are transforming industries, from healthcare to finance, and their applications are growing every day. Here’s why learning AI & ML is important:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li><strong>Endless Opportunities</strong>: AI & ML are rapidly advancing fields with a huge demand for skilled professionals. These technologies open doors to numerous career opportunities in tech, healthcare, automotive, finance, and more.</li>
    <li><strong>Improved Decision Making</strong>: AI & ML models can process vast amounts of data and identify patterns to make data-driven decisions, improving outcomes across different industries.</li>
    <li><strong>Automation of Processes</strong>: AI can automate routine tasks, enabling businesses to operate more efficiently, reduce errors, and save costs.</li>
    <li><strong>Creating Intelligent Systems</strong>: With AI & ML, you can create systems that learn from data, predict future outcomes, and even make decisions without human intervention.</li>
    <li><strong>Impact on Daily Life</strong>: From voice assistants to recommendation systems, AI is already integrated into our daily lives, making it essential to understand how these technologies work.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Key AI & ML Topics Covered</h3>
  <p class="text-lg text-gray-600 mb-4">
    This course covers a wide range of AI & ML topics that are essential for building intelligent systems. Here are some of the major areas:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li><strong>Machine Learning Algorithms</strong>: Understand algorithms like linear regression, decision trees, k-nearest neighbors, and more.</li>
    <li><strong>Deep Learning</strong>: Dive into neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs) for complex pattern recognition tasks.</li>
    <li><strong>Natural Language Processing (NLP)</strong>: Learn how to build systems that can understand and process human language, including sentiment analysis, text classification, and chatbot development.</li>
    <li><strong>Computer Vision</strong>: Learn how to train models to understand images and videos, including tasks like object detection, image segmentation, and facial recognition.</li>
    <li><strong>Reinforcement Learning</strong>: Understand how agents can learn to make decisions by interacting with their environment and maximizing rewards.</li>
    <li><strong>AI Model Deployment</strong>: Learn how to deploy AI & ML models for production, including tools for scaling and integrating models into applications.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Choose This AI & ML Course?</h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600 mb-6">
    <li><strong>Hands-on Experience</strong>: Get hands-on experience with coding, building models, and working with real-world datasets.</li>
    <li><strong>Beginner to Expert</strong>: Whether you are a beginner or have some background in programming, this course covers the fundamentals and advanced topics in AI & ML.</li>
    <li><strong>Real-World Projects</strong>: Work on practical projects that you can showcase in your portfolio, such as building a chatbot, image classifier, or recommendation system.</li>
    <li><strong>Industry-Relevant Skills</strong>: Learn the most in-demand AI & ML skills used by companies across various industries.</li>
    <li><strong>Expert Instructor</strong>: Learn from an experienced AI & ML practitioner with hands-on knowledge of the latest tools and technologies.</li>
  </ul>

  <h2 class="text-lg lg:text-2xl font-semibold text-center text-pink-500 mt-8 mb-4">Start Your Journey into AI & Machine Learning Today!</h2>
  <p class="text-lg text-gray-600 mb-6 text-center">
    Ready to explore the exciting world of Artificial Intelligence and Machine Learning? Enroll in our course today and start mastering the technologies that will shape the future!
  </p>

  <div class="text-center mt-8">
    <a href="tel:+919416059799" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Enroll Now </a>
  </div>
</section>
    `
  },
  {
    id:4,
    image: "/ds.jpg",
    tittle: "Data Science",
    desc: "Master Data Science with online courses. Learn data analysis, visualization, statistics, machine learning, and data-driven decision making using Python, R, and powerful tools like Pandas and TensorFlow.",
    duration: "1 year",
    fees: "4k/month",
  data :`
  <section id="data-science-course" class="max-w-7xl mx-auto px-4 py-8">
  <h1 class="text-lg lg:text-2xl font-extrabold text-center text-pink-500 mb-8">Data Science: Uncover Insights from Data</h1>
  
  <h2 class="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Turn Raw Data into Actionable Insights</h2>
  <p class="text-lg text-gray-600 mb-6">
    Data Science is a powerful field that combines statistical analysis, programming, and machine learning to extract insights and solve complex problems. In this course, you’ll learn to work with large datasets, apply data manipulation techniques, and utilize machine learning models to make predictions. Start your journey to becoming a data expert today!
  </p>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mb-4">What Will You Learn in This Course?</h3>
  <p class="text-lg text-gray-600 mb-4">
    By the end of this course, you’ll be able to perform data analysis and visualization, work with different types of data, and apply machine learning techniques to real-world problems. Here’s a brief overview of what you’ll learn:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li>Understanding data collection, cleaning, and preprocessing techniques.</li>
    <li>Exploring different types of data such as structured, unstructured, and time-series data.</li>
    <li>Working with tools like Python, Pandas, and NumPy for data analysis and manipulation.</li>
    <li>Mastering data visualization techniques using libraries like Matplotlib and Seaborn.</li>
    <li>Applying machine learning algorithms like regression, classification, and clustering to solve problems.</li>
    <li>Building and evaluating machine learning models to make predictions on new data.</li>
    <li>Understanding statistical methods and their applications in data analysis.</li>
    <li>Developing and deploying data science models in production environments.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Is Data Science Important?</h3>
  <p class="text-lg text-gray-600 mb-4">
    In today’s data-driven world, businesses rely on data science to make informed decisions, improve products, and gain competitive advantages. Here’s why Data Science is important:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li><strong>Transforming Businesses</strong>: Data science helps businesses understand consumer behavior, improve services, and streamline operations through data-driven insights.</li>
    <li><strong>In-Demand Career</strong>: Data Science professionals are in high demand as more companies adopt data-driven approaches to solve problems and make decisions.</li>
    <li><strong>Improving Decision-Making</strong>: Data Science enables businesses to make decisions based on data and trends rather than gut-feelings or assumptions.</li>
    <li><strong>Automation of Tasks</strong>: By using predictive models and machine learning, data science can automate processes and improve productivity.</li>
    <li><strong>Enhancing Customer Experience</strong>: Data Science helps to personalize user experiences by analyzing customer preferences and providing tailored recommendations.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Key Data Science Topics Covered</h3>
  <p class="text-lg text-gray-600 mb-4">
    The course is designed to cover a range of data science topics that will equip you with the skills needed to become a proficient data scientist:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li><strong>Data Wrangling & Cleaning</strong>: Learn how to prepare data for analysis by handling missing data, cleaning datasets, and transforming data into a usable format.</li>
    <li><strong>Exploratory Data Analysis (EDA)</strong>: Gain expertise in exploring and summarizing datasets to uncover patterns and relationships.</li>
    <li><strong>Data Visualization</strong>: Learn to create compelling visualizations that communicate data insights effectively using tools like Matplotlib, Seaborn, and Tableau.</li>
    <li><strong>Statistical Analysis</strong>: Develop an understanding of fundamental statistical methods like hypothesis testing, probability distributions, and regression analysis.</li>
    <li><strong>Machine Learning Algorithms</strong>: Master essential machine learning algorithms such as linear regression, decision trees, k-nearest neighbors, and more.</li>
    <li><strong>Deep Learning</strong>: Explore deep learning techniques and neural networks for more complex tasks like image recognition and natural language processing.</li>
    <li><strong>Data Science Pipelines</strong>: Learn how to structure your data science workflows, from data collection to model deployment.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Choose This Data Science Course?</h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600 mb-6">
    <li><strong>Comprehensive Curriculum</strong>: This course provides a deep dive into the key areas of data science, from data analysis to machine learning.</li>
    <li><strong>Hands-on Learning</strong>: Gain practical experience with real-world datasets and projects to sharpen your skills.</li>
    <li><strong>Beginner to Advanced Level</strong>: Whether you're new to data science or have some experience, this course covers both the basics and advanced techniques.</li>
    <li><strong>Expert Instructor</strong>: Learn from an experienced data scientist who will guide you through complex concepts in a simple, understandable manner.</li>
    <li><strong>Job-Ready Skills</strong>: Develop the skills necessary to succeed in data science careers across various industries, including finance, healthcare, and e-commerce.</li>
  </ul>

  <h2 class="text-lg lg:text-2xl font-semibold text-center text-pink-500 mt-8 mb-4">Start Your Data Science Journey Today!</h2>
  <p class="text-lg text-gray-600 mb-6 text-center">
    Ready to unlock the power of data and become a data expert? Enroll in our Data Science course and start your journey toward a career in one of the most exciting and in-demand fields today!
  </p>

  <div class="text-center mt-8">
    <a href="tel:+919416059799" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Enroll Now</a>
  </div>
</section>
  `
  },
  {
    id:5,
    image: "/app.webp",
    tittle: "Basic computer",
    desc: "Master essential computer skills with online courses. Learn to use Notepad, Microsoft Word, Excel, MS Office, and typing skills for efficient work and productivity. Perfect for beginners and professionals.",
    duration: "3 - 4 months",
    fees: "1.5k/month",
   data:`
   <section id="basic-computer-course" class="max-w-7xl mx-auto px-4 py-8">
  <h1 class="text-lg lg:text-2xl font-extrabold text-center text-pink-500 mb-8">Basic Computer Concepts, MS Office & Fundamental Skills</h1>
  
  <h2 class="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">Get Started with the Digital World</h2>
  <p class="text-lg text-gray-600 mb-6">
    Understanding basic computer concepts and mastering tools like MS Office is crucial for performing day-to-day tasks in today’s digital workplace. In this course, you will learn essential computer skills, how to use MS Office applications like Word, Excel, and PowerPoint, and explore fundamental concepts like operating systems, file management, and digital safety.
  </p>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mb-4">What Will You Learn in This Course?</h3>
  <p class="text-lg text-gray-600 mb-4">
    By the end of this course, you’ll have a solid understanding of computer fundamentals and MS Office applications that are widely used in professional environments. Here’s what you will learn:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li>Basic concepts of computers and their components (hardware & software).</li>
    <li>Introduction to operating systems and file management techniques.</li>
    <li>How to work with MS Word, including document formatting, creating tables, and inserting images.</li>
    <li>How to use MS Excel for data entry, formulas, and creating charts and graphs.</li>
    <li>Creating professional presentations using MS PowerPoint, including adding multimedia and animations.</li>
    <li>Understanding internet basics, email management, and digital safety.</li>
    <li>Practical tips for enhancing productivity with keyboard shortcuts, file organization, and more.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Are Basic Computer Skills Important?</h3>
  <p class="text-lg text-gray-600 mb-4">
    Having basic computer skills is no longer optional. These skills are crucial in almost every profession. Here’s why learning these skills is so important:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li><strong>Improves Efficiency</strong>: Mastering computer applications helps to work faster and more efficiently, saving time and increasing productivity.</li>
    <li><strong>Enhances Communication</strong>: Tools like MS Word, Excel, and PowerPoint help professionals create well-documented reports, presentations, and spreadsheets.</li>
    <li><strong>Career Opportunities</strong>: Basic computer literacy is essential for most jobs, and these skills increase your chances of landing and excelling in your career.</li>
    <li><strong>Digital Literacy</strong>: Understanding computers and how to use them properly empowers you to work in the digital world confidently, whether at home or in the office.</li>
    <li><strong>Competitive Edge</strong>: Mastering MS Office and other computer skills gives you an edge over competitors in the job market, as these are widely used in most professions.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Course Content Overview</h3>
  <p class="text-lg text-gray-600 mb-4">
    This course is designed to give you the foundational knowledge needed to navigate computers and use MS Office applications effectively. Topics include:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li><strong>Introduction to Computers</strong>: Understand the basic components of a computer, such as CPU, memory, input/output devices, and how they work together.</li>
    <li><strong>Operating Systems</strong>: Learn about the role of operating systems in managing hardware and software, and get familiar with file management techniques.</li>
    <li><strong>Microsoft Word</strong>: Learn how to create, format, and edit documents. Explore features like text formatting, inserting tables, creating lists, and managing document layout.</li>
    <li><strong>Microsoft Excel</strong>: Discover how to use Excel for organizing, analyzing, and visualizing data through tables, charts, and pivot tables. Learn how to perform calculations using formulas.</li>
    <li><strong>Microsoft PowerPoint</strong>: Learn how to design slides, create impactful presentations, add multimedia elements, and apply slide transitions and animations.</li>
    <li><strong>Introduction to the Internet</strong>: Learn how to browse the web, send and receive emails, and stay safe online. Understand basic internet concepts like URLs, browsers, and search engines.</li>
    <li><strong>Digital Safety & Security</strong>: Get insights into online security, protecting your privacy, and safe browsing practices to avoid cyber threats.</li>
  </ul>

  <h3 class="text-lg lg:text-2xl font-medium text-gray-800 mt-8 mb-4">Why Choose This Course?</h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-gray-600 mb-6">
    <li><strong>Beginner-Friendly</strong>: This course is designed for people who are new to computers and MS Office, providing easy-to-understand lessons and hands-on practice.</li>
    <li><strong>Practical Skills</strong>: Learn real-world skills that you can apply to your job, studies, or everyday tasks.</li>
    <li><strong>Accessible Learning</strong>: Learn at your own pace and convenience, with online lessons that you can access from anywhere.</li>
    <li><strong>Expert Guidance</strong>: Gain insights from an experienced instructor who will help you navigate through the course material step by step.</li>
    <li><strong>Boost Your Career</strong>: Whether you are looking to advance your career or learn new skills, mastering basic computer and MS Office skills is an important asset for professional growth.</li>
  </ul>

  <h2 class="text-3xl font-semibold text-center text-pink-500 mt-8 mb-4">Start Learning Today!</h2>
  <p class="text-lg text-gray-600 mb-6 text-center">
    Ready to enhance your computer skills and become proficient with MS Office? Enroll in our Basic Computer Concepts & MS Office course and start learning today!
  </p>

  <div class="text-center mt-8">
    <a href="tel:+919416059799" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Enroll Now</a>
  </div>
</section>
   `
  },
  {
    id:6,
    image: "/tools.webp",
    tittle: "Tools we use in app",
    desc: "Explore Git for version control, GitHub for collaboration, MongoDB Atlas for cloud databases, and website hosting. Master coding in VS Code and see how these tools integrate for efficient web development.",
  },
];

export default Course;
