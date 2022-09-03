import logo from './logo.svg';
import './App.css';

import Reading from './Reading/Reading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mandarin Flashcard App</h1>
        <h2>Created by Wint3rSun </h2>
        <nav>
          <p>Which skill do you want to practice?</p>
          <div className='d-flex justify-content-around '>
            <button className="btn btn-primary">Reading</button>
            <button id="disabled-btn" className="btn btn-grey disabled" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Comming Soon</button>
          </div>
        </nav>
      </header>
      <main>
        <Reading />
      </main>
    </div>
  );
}

export default App;
