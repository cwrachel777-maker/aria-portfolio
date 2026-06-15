import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import AbilityMap from "./pages/AbilityMap";
import Projects from "./pages/Projects";
import AProjects from "./pages/AProjects";
import BProjects from "./pages/BProjects";
import CProjects from "./pages/CProjects";
import MarketInsights from "./pages/MarketInsights";
import About from "./pages/About";

// Project details
import A1Project from "./pages/projectDetail/A1Project";
import AOtherProject from "./pages/projectDetail/AOtherProject";
import B1Project from "./pages/projectDetail/B1Project";
import BOtherProject from "./pages/projectDetail/BOtherProject";
import CProject from "./pages/projectDetail/CProject";

function App() {
  return (
    <Router basename="/aria-portfolio/">
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          <Routes>
            {/* Main layout pages */}
            <Route path="/" element={<Home />} />
            <Route path="/ability" element={<AbilityMap />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<MarketInsights />} />
            <Route path="/about" element={<About />} />

            {/* Project category pages */}
            <Route path="/projects/a" element={<AProjects />} />
            <Route path="/projects/b" element={<BProjects />} />
            <Route path="/projects/c" element={<CProjects />} />

            {/* A category projects */}
            <Route path="/projects/a/a1" element={<A1Project />} />
            <Route path="/projects/a/a2" element={<AOtherProject projectIndex={1} />} />
            <Route path="/projects/a/a3" element={<AOtherProject projectIndex={2} />} />
            <Route path="/projects/a/a4" element={<AOtherProject projectIndex={3} />} />

            {/* B category projects */}
            <Route path="/projects/b/b1" element={<B1Project />} />
            <Route path="/projects/b/b2" element={<BOtherProject projectIndex={1} />} />
            <Route path="/projects/b/b3" element={<BOtherProject projectIndex={2} />} />

            {/* C category projects */}
            <Route path="/projects/c/c1" element={<CProject projectIndex={0} />} />
            <Route path="/projects/c/c2" element={<CProject projectIndex={1} />} />
            <Route path="/projects/c/c3" element={<CProject projectIndex={2} />} />
            <Route path="/projects/c/c4" element={<CProject projectIndex={3} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
