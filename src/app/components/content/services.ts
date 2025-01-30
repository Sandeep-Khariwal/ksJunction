export interface ServiceType {
    image:string,
    tittle:string,
    desc:string,
    data?:string
}

 const Service:ServiceType[] = [
    {
        image:"/app-service.jpg",
        tittle:"Mobile Application Development",
        desc:"We craft innovative and user-friendly mobile applications tailored to your business needs. Whether it's Android, iOS, or cross-platform, our solutions ensure seamless functionality and exceptional user experience to help your business thrive in the mobile-first world.",
        data:""
    },
    {
        image:"/web-service.jpg",
        tittle:"Website Development",
        desc:"Our website and web application development services focus on creating responsive, scalable, and visually stunning solutions. From dynamic websites to complex web applications, we deliver secure and feature-rich platforms to enhance your online presence and engagement.",
        data:""
    },
    {
        image:"/desktop-app-service.jpg",
        tittle:"Desktop Application Development",
        desc:"Streamline your operations with our powerful desktop applications. Designed for efficiency and performance, our custom desktop solutions cater to your specific business requirements, ensuring smooth and reliable functionality for day-to-day tasks.",
        data:""
    },
    {
        image:"/digital-marketing.jpeg",
        tittle:"Digital Marketing",
        desc:"Boost your online presence with our digital marketing services, including social media management, Meta Ads, video editing, and post designing, to engage your audience, build your brand, and achieve business goals.",
        data:""
    },
    {
        image:"/seo.png",
        tittle:"SEO for all websites",
        desc:"Boost your business with our expert website SEO services! Drive more traffic, improve search rankings, and attract the right audience to grow your online presence effectively.",
        data:""
    },
]

export default Service