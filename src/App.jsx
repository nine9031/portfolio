import "./App.css";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import AboutBox from "./components/AboutBox";
import ProjectsBox from "./components/ProjectsBox";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import Typed from "typed.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //** Type Effect **/
    const typingEffect = new Typed(".typedText", {
      strings: ["Gamer", "Developer", "tester"],
      loop: true,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
