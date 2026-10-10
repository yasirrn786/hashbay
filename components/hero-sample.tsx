"use client";
import { useState } from "react";
export function HeroSample() {
  const [complete, setComplete] = useState(false);
  return (
    <section className="hero-sample" aria-label="Interactive workflow sample">
      <div className="sample-head">
        <h2>From request to resolution</h2>
        <p className="muted">Interactive sample · no client data</p>
      </div>
      <div className="sample-task">
        <h3>Prepare a backup plan</h3>
        <p className="sample-description">
          Review current system, list critical data and propose a backup
          approach.
        </p>
      </div>
      <div className="sample-state">
        <p className="small">Current step</p>
        <p className="state" aria-live="polite">
          {complete ? "Complete" : "In progress"}
        </p>
        <div
          className="sample-progress"
          role="progressbar"
          aria-label="Sample task progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={complete ? 100 : 50}
        >
            <span style={{ width: complete ? "100%" : "50%" }} />
        </div>
        <button
          className="button button-clay"
          onClick={() => setComplete((previous) => !previous)}
        >
          {complete ? "Reopen task" : "Mark as complete"}
        </button>
      </div>
      <p className="sample-caption">A real interaction. Try it here.</p>
    </section>
  );
}
