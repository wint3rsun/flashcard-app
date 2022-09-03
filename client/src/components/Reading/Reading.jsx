import "./Reading.css"

export default function Reading() {
  return (
    <section className="reading-section" style={{height:"100vh"}}>
      <h2>Reading Practice!</h2>
      <ul>
        <li>
        <section className="lvl-section border rounded-circle d-flex flex-column justify-content-center">
          <h4>Level 1</h4>
          <button type="button" className="btn btn-success align-self-center">Start</button>
          <p>Score:</p>
        </section>
        </li>
      </ul>




    </section>
  )
}