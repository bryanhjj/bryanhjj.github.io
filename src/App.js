import './App.css';
import 'animate.css';
import Carousel from './components/Projects/carousel.js';
import Contact from './components/Contact/contact.js';
import HomeT from './components/Home/homeTest.js';
import { push as Menu } from 'react-burger-menu';
import navStyles from './components/NavBar/navBar.js';
import About from './components/About me/about';
import Skills from './components/Skills/skills';
// this is fucking other stuff up (mainly our carousel)
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div id='outer-container'>
        <Menu outerContainerId={'outer-container'} styles={navStyles}>
          <a className='menu-item' href='#home'>Home</a>
          <br/>
          <a className='menu-item' href='#about'>About</a>
          <br/>
          <a className='menu-item' href='#skills'>Skills</a>
          <br/>
          <a className='menu-item' href='#my-projects'>My projects</a>
          <br/>
          <a className='menu-item' href='#contact'>Contact</a>
        </Menu>

        <div id='home'>
          <HomeT/>
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
