import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Team from "./sections/Team";

function App() {
  return (
    <div className="relative">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
