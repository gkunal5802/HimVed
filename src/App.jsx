import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Explore from "./Pages/Explore";
import FAQ from "./Pages/FAQ";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import DiseaseDetails from "./components/Services/DiseaseDetails";
import "./index.css";
import Body from "./ui/Body";
import Wrapper from "./ui/Wrapper";
import { lightTheme } from "./utils/themes";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, disease: null });

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Header />
        <Body>
          <Home />
          <About />
          <Explore />
          <Services openModal={openModal} setOpenModal={setOpenModal} />
          <FAQ />
          <Wrapper>
            <Contact />
          </Wrapper>

          <Footer />
          {openModal.state && (
            <DiseaseDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
