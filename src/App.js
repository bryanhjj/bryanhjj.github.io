import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects/Projects';
import { push as Menu } from 'react-burger-menu'
import navStyles from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div id='outer-container'>
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} styles={navStyles}>
          <a className='menu-item' href='#home'>Home</a>
          <a className='menu-item' href='#about'>About</a>
          <a className='menu-item' href='#skills'>Skills</a>
          <a className='menu-item' href='#my-projects'>My projects</a>
          <a className='menu-item' href='#href'>Contact</a>
        </Menu>

        <div id='my-projects'>
          <Projects/>
        </div>
      </div>
    </div>
  );
}

export default App;
