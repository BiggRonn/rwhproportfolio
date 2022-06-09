import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Intro from './pages/intro/Intro';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
     <Header/>
     <Intro path="/"/>
     <About path="/about"></About>
     <Projects path="/projects"></Projects>
     <Contact path="/contact"></Contact>
     <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
