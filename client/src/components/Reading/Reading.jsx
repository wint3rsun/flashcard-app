import { useState } from "react";

import "./Reading.css"

import FlashcardList from "../Flashcards/FlashcardList";

const MODE = {
  viewFlashcards: "VIEW_FLASHCARDS", 
  viewMap: "VIEW_MAP"
}

export default function Reading() {
  const [mode, setMode] = useState(MODE.viewMap);


  const showFlashcards = () => {
    setMode(MODE.viewFlashcards);
  }

  const quitRound = () => {
    setMode(MODE.viewMap);
  }

  return (
    <section className="reading-section" style={{height:"100vh"}}>
      {
        mode === MODE.viewMap &&
        <>
          <h2>Reading Practice!</h2>
          <h3>HSK 1</h3>
          <ul>
            <li className="d-flex justify-content-center">
            <section className="lvl-section border rounded-circle d-flex flex-column justify-content-center">
              <h4>Level 1</h4>
              <button onClick={showFlashcards} type="button" className="btn btn-success align-self-center">Start</button>
              <p>Score:</p>
            </section>
            </li>
            <div className="d-flex justify-content-around">
              <li className="mx-2">
              <section className="lvl-section border rounded-circle d-flex flex-column justify-content-center">
                <h4>Level 2</h4>
                <button onClick={showFlashcards} type="button" className="btn btn-success align-self-center">Start</button>
                <p>Score:</p>
              </section>
              </li>
              <li className="mx-2">
              <section className="lvl-section border rounded-circle d-flex flex-column justify-content-center">
                <h4>Level 3</h4>
                <button onClick={showFlashcards} type="button" className="btn btn-success align-self-center">Start</button>
                <p>Score:</p>
              </section>
              </li>
            </div>
          </ul>
        </>
      }
      {
        mode === MODE.viewFlashcards &&

        <section className="flashcards d-flex">
          <FlashcardList quitRound={quitRound}/>
        </section>
      }
    </section>
  )
}