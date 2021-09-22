import "./Main.css"

import Intro from '../intro/Intro';
import About from '../about/About';
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";


const Main = () => {
    return (
        <main className="content">
            <Intro></Intro>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </main>
    );
}

export default Main;