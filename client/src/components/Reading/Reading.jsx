import { useState } from "react";

import "./Reading.css"

import Flashcard from "../Flashcards/Flashcard";

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
          <ul>
            <li>
            <section className="lvl-section border rounded-circle d-flex flex-column justify-content-center">
              <h4>Level 1</h4>
              <button onClick={showFlashcards} type="button" className="btn btn-success align-self-center">Start</button>
              <p>Score:</p>
            </section>
            </li>
          </ul>
        </>
      }
      {
        mode === MODE.viewFlashcards &&

        <section className="flashcards d-flex">
          <Flashcard quitRound={quitRound}/>
        </section>
      }
    </section>
  )
}