import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import Course from "./components/Course";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#f8f8fa] min-h-screen ">
     <NavBar/>
     <HeroSection/>
     <Course/>
     <About/>
     <Services/>
     <Footer/>
    </div>
  );
}
