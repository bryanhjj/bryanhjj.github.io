import './App.css';
import 'animate.css';
import Carousel from './components/Projects/carousel.js';
import Contact from './components/Contact/contact.js';
import Home from './components/Home/home.js';
import NavBar from './components/NavBar/navBar.js';
import About from './components/About me/about';
import Skills from './components/Skills/skills';

/* to-do:
  7) make all redirect links open a new tab
*/

function App() {
  return (
    <div className="App">
      <div id='outer-container'>
        <NavBar/>

        <div id='home'>
          <Home/>
        </div>

        <div id='about'>
          <About/>
        </div>

        <div id='skills'>
          <Skills/>
        </div>

        <div id='my-projects'>
          <Carousel show={3} infiniteLoop/>
        </div>

        <div id='contact'>
          <Contact sx={{ mt: 5 }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
