export interface ServiceType {
    image:string,
    tittle:string,
    desc:string
}

 const Service:ServiceType[] = [
    {
        image:"/business.jpg",
        tittle:"Provide application for all business",
        desc:"Create applications to fit any business need. Make daily tasks easier, improve productivity, and help your business grow with solutions tailored to support every area of your operations."
    },
    {
        image:"/ecom.webp",
        tittle:"We provide e-commerce type website",
        desc:"We create e-commerce websites designed to help your business sell online, reach more customers, and grow. Our websites are easy to use, secure, and built to fit your needs."
    },
    {
        image:"/bothapp.webp",
        tittle:"We provide both website and mobile app",
        desc:"We provide both websites and mobile apps to help your business reach more customers. Our solutions are user-friendly, customized, and built to support your growth on all platforms."
    },
]

export default Service