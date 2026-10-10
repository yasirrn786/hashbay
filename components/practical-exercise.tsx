"use client";
import { useState } from "react";
export function PracticalExercise() {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <section className="dark-band training-exercise">
      <div className="container split">
        <div>
          <h2>A first step in the lab.</h2>
          <p className="question">
            A backup has completed. What confirms you can recover?
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setChecked(true);
          }}
        >
          <fieldset>
            <legend className="sr-only">
              Choose the strongest recovery evidence
            </legend>
            <label>
              <input
                required
                type="radio"
                name="recovery"
                value="restore"
                checked={answer === "restore"}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  setChecked(false);
                }}
              />
              A successful restore test
            </label>
            <label>
              <input
                required
                type="radio"
                name="recovery"
                value="screenshot"
                checked={answer === "screenshot"}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  setChecked(false);
                }}
              />
              A screenshot of the backup job
            </label>
          </fieldset>
          <button className="button button-clay" type="submit">
            Check my answer
          </button>
          <p className="small">A sample exercise, not a qualification.</p>
          {checked && (
            <p className="exercise-feedback" role="status">
              {answer === "restore"
                ? "Correct. A successful restore of the agreed data provides recovery evidence. Also check integrity, access and the required recovery time."
                : "A job screenshot confirms that a job ran, but not that the data can be recovered. Test a restore safely and verify the recovered data."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
