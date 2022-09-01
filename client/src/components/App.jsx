import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mandarin Flashcard App</h1>
        <h2>Created by Wint3rSun </h2>
        <nav>
          <p>What do you want to practice?</p>
          <div className='d-flex justify-content-around '>
            <button className="btn btn-primary">Reading</button>
            <button className="btn btn-primary">Writing</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
