import "./index.scss";
import { useState } from "react";
import Nav from "./Components/Layout/Nav/nav";
import Header from "./Components/Layout/Header/header";
import Main from "./Components/Layout/Main/main";
import Footer from "./Components/Layout/Footer/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Components/UI/modal/modal";
library.add(fab, faLocationDot, faPhone, faEnvelope);

function App() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="wrapper">
      <Nav modal={modalHandler} />
      <Header />
      <Main modal={modalHandler}/>
      <Footer modal={modalHandler}/>
      {modal && <Modal modal={modalHandler}/>}
    </div>
  );
}

export default App;
