// import { useState } from "react";
import "./App.css";
import Header from "./Header/header.jsx";
import Hero from "./Hero/hero.jsx";
import MyWork from "./MyWork/mywork.jsx";
import ContactSection from "./ContactSection/contactsection.jsx";
import Footer from "./Footer/footer.jsx";


function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <MyWork></MyWork>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  );
}

export default App;
