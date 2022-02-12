import './index.scss';
import Nav from "./Components/Layout/Nav/nav";
import Header from "./Components/Layout/Header/header";
import Main from "./Components/Layout/Main/main";
import Footer from "./Components/Layout/Footer/footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import About from './Components/Pages/About/about';
library.add( fab, faLocationDot, faPhone, faEnvelope );

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
