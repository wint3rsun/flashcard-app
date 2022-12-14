import "./Flashcard.css"

export default function Flashcard({quitRound, flashcard}) {


  const flipFlashcard = (id) => {
    const element = document.getElementById(`${id}`);
    element.classList.toggle('flip');
  }

  return (
    <div id={flashcard.id} className="flip-card">
      <div className="flip-card-inner">
        <div className="card flip-card-front">
          <button onClick={quitRound} type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
          <img src="logo57.png" className="card-img-top" alt="logo"/>
          <div className="card-body">
            <h5 className="card-title">Question</h5>
            <p className="card-text fs-1">{flashcard.character} <i className="bi bi-volume-up"></i> </p>
            <button onClick={()=>flipFlashcard(flashcard.id)} className="btn btn-primary">Flip</button>
            <button className="btn btn-primary disabled">Star</button>
          </div>
        </div>
        <div className="card flip-card-back">
          <button onClick={quitRound} type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
          <img src="logo57.png" className="card-img-top" alt="logo"/>
          <div className="card-body">
            <h5 className="card-title">Answer</h5>
            <p className="card-text fs-1">{flashcard.pinyin} <i className="bi bi-volume-up"></i></p>
            <div className="d-flex justify-content-around">
              <button className="btn btn-success">Right</button>
              <button className="btn btn-danger">Wrong</button>
            </div>
            <div className="d-flex justify-content-around">
              <button onClick={()=>flipFlashcard(flashcard.id)} className="btn btn-primary">Flip</button>
              <button className="btn btn-primary disabled">Star</button>
              <button className="btn btn-primary disabled">Examples</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}