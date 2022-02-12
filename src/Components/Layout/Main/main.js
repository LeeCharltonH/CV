import About from "../../Pages/About/about";
import Portfolio from "../../Pages/Portfolio/portfolio";
import Skills from "../../Pages/Skills/skills";
import History from "../../Pages/WorkHistory/workhistory";
import Contact from "../../Pages/Contact/contact";


const Main = (props) => {
    return (
        <main>
            <About />
            <Skills />
            <Portfolio />
            <History />
            <Contact />
        </main>
    )
};

export default Main;