import About from "../../Pages/About/about";

import Skills from "../../Pages/Skills/skills";
import History from "../../Pages/WorkHistory/workhistory";
import styles from "./mainstyles.module.scss";
import Portfolio from "../../Pages/Portfolio/portfolio";


const Main = (props) => {
    return (
        <main className={styles.main}>
            <About modal={props.modal} />
            <Skills />
            <Portfolio />
            <History />
        </main>
    )
};

export default Main;