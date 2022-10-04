
import React, {useState} from "react";
import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/Hero';
import MyProjects from './components/MyProjects';
import NavBar from './components/NavBar';
import { ProjectData } from './Data/ProjectData';
import ContactMe from './components/ContactMe';
import SideMenu from './components/SideMenu';
import Footer from "./components/Footer";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='App'>    
    <NavBar toggle={toggle}/>
    <SideMenu isOpen={isOpen} toggle={toggle}/>
    <HeroSection/>
    <AboutMe/>
    <MyProjects projects={ProjectData}/>
    <ContactMe/>
    <Footer/>
    </div>
  );
}

export default App;
