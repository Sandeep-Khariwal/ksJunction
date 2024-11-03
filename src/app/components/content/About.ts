
export interface CourseType {
    image:string,
    tittle:string,
    desc:string
}

 const Course:CourseType[] = [
    {
        image:"/coding.png",
        tittle:"Master the Fundamentals",
        desc:"Dive deep into the essentials of programming—data types, control flows, functions, and data structures. Gain confidence in writing robust logic and foundational code."
    },
    {
        image:"/js.webp",
        tittle:"Unlock JavaScript’s Power",
        desc:"Before diving into frameworks, master vanilla JavaScript. Learn to code effectively in the browser and Node.js, setting a solid foundation to tackle any framework effortlessly."
    },
    {
        image:"/web.jpg",
        tittle:"Craft Stunning Web Pages",
        desc:"Understand the building blocks of the web with comprehensive HTML5 and CSS3 training. From semantic tags to complex CSS animations, master the art of creating visually appealing and responsive layouts."
    },
    {
        image:"/react.png",
        tittle:"Master React and Its Ecosystem",
        desc:"Explore the full capabilities of React, including Hooks, Redux, and React Router. Understand the intricacies of the React ecosystem and learn how everything works together for dynamic web applications."
    },
    {
        image:"/app.webp",
        tittle:"Build Robust Full-Stack Applications",
        desc:"Learn to create comprehensive full-stack apps with a powerful backend to store data and interact with servers. Gain practical skills in server-side logic, databases, and user authentication."
    },
    {
        image:"/tools.webp",
        tittle:"Tools we use in app",
        desc:"Explore Git for version control, GitHub for collaboration, MongoDB Atlas for cloud databases, and website hosting. Master coding in VS Code and see how these tools integrate for efficient web development."
    }
]

export default Course