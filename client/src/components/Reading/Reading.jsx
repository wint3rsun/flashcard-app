import "./Reading.css"

export default function Reading() {
  const flashcard = {
    1:{
      id: 1,
      side1: "你好",
      side2: "hello",
      img: ""
    }
  }

  const showFlashcards = () => {
    alert("flashcard button clicked");
  }

  const flipFlashcard = (id) => {
    const element = document.getElementById(`${id}`);
    element.classList.toggle('flip');
  }

  const quitRound = () => {
    alert("quitter that is what you are~")
  }
  return (
    <section className="reading-section" style={{height:"100vh"}}>
      <h2>Reading Practice!</h2>
      <ul>
        <li>
        <section className="lvl-section border rounded-circle d-flex flex-column justify-content-center">
          <h4>Level 1</h4>
          <button onClick={showFlashcards} type="button" className="btn btn-success align-self-center">Start</button>
          <p>Score:</p>
        </section>
        </li>
      </ul>
      <section className="flashcards d-flex">
        <div id={flashcard[1].id} className="flip-card">
          <div className="flip-card-inner">
            <div className="card flip-card-front">
              <button onClick={quitRound} type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
              <img src="logo57.png" className="card-img-top" alt="logo"/>
              <div className="card-body">
                <h5 className="card-title">Question</h5>
                <p className="card-text fs-1">{flashcard[1].side1} <i className="bi bi-volume-up"></i> </p>
                <button onClick={()=>flipFlashcard(flashcard[1].id)} className="btn btn-primary">Flip</button>
                <button className="btn btn-primary disabled">Star</button>
              </div>
            </div>
            <div className="card flip-card-back">
              <button onClick={quitRound} type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
              <img src="logo57.png" className="card-img-top" alt="logo"/>
              <div className="card-body">
                <h5 className="card-title">Answer</h5>
                <p className="card-text fs-1">{flashcard[1].side2} <i className="bi bi-volume-up"></i></p>
                <div className="d-flex justify-content-around">
                  <button className="btn btn-success">Right</button>
                  <button className="btn btn-danger">Wrong</button>
                </div>
                <div className="d-flex justify-content-around">
                  <button onClick={()=>flipFlashcard(flashcard[1].id)} className="btn btn-primary">Flip</button>
                  <button className="btn btn-primary disabled">Star</button>
                  <button className="btn btn-primary disabled">Examples</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}