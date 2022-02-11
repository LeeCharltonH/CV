import './index.scss';
import Nav from "./Layout/Nav/nav";
import Header from "./Layout/Header/header";
import Main from "./Layout/Main/main";
import Footer from "./Layout/Footer/footer";

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
