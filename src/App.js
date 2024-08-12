// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";
// import NotFound from "./components/NotFound";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
