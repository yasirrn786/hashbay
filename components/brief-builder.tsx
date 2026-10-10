"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { company } from "@/lib/content";

export function BriefBuilder({
  initialService,
  initialCourse,
  serviceNames,
}: {
  initialService?: string;
  initialCourse?: string;
  serviceNames: readonly string[];
}) {
  const options = [...serviceNames, "Training", "Not sure yet"];
  const selected = options.includes(initialService || "")
    ? initialService!
    : options[0];
  const [service, setService] = useState(selected);
  const [goal, setGoal] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [draft, setDraft] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  function makeDraft() {
    if (!formRef.current?.reportValidity()) return null;
    if (!goal.trim() || !name.trim()) {
      setMessage("Please enter your name and the result you want.");
      return null;
    }
    setMessage("");
    return composeDraft();
  }
  function composeDraft() {
    return [
      "Hello Hashbay,",
      "",
      "I would like to discuss a project.",
      "Service: " + service,
      ...(service === "Training" && initialCourse
        ? ["Course of interest: " + initialCourse]
        : []),
      "",
      "Desired result and constraints:",
      goal.trim(),
      "",
      "Name: " + name.trim(),
      "Email: " + email.trim(),
      "Budget range: " + (budget.trim() || "To discuss"),
      "Target date: " + (date.trim() || "To discuss"),
      "",
      "Please confirm scope, availability, deliverables, total cost and next steps.",
    ].join("\n");
  }
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = makeDraft();
    if (text) {
      setDraft(text);
      setMessage("Draft ready below. Nothing has been sent.");
    }
  }
  function download(event: React.MouseEvent<HTMLAnchorElement>) {
    const text = makeDraft();
    if (!text) {
      event.preventDefault();
    } else {
      setMessage("Brief prepared for download. Nothing has been sent.");
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setMessage(
        "Draft copied. Paste it into your email and send it when ready.",
      );
    } catch {
      setMessage(
        "Clipboard access is unavailable. Select the draft text or download the brief instead.",
      );
    }
  }
  const mailHref = draft
    ? "mailto:" +
      company.email +
      "?subject=" +
      encodeURIComponent("Hashbay enquiry: " + service) +
      "&body=" +
      encodeURIComponent(draft)
    : "";
  return (
    <form
      className="brief-form"
      onSubmit={prepare}
      ref={formRef}
      onChange={() => {
        setDraft("");
        setMessage("");
      }}
    >
      <label className="field">
        <span>What do you need?</span>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      {service === "Training" && initialCourse && (
        <p className="small" style={{ marginBottom: 20 }}>
          Course of interest: {initialCourse}. Dates, instructor and format will
          be confirmed before enrolment.
        </p>
      )}
      <label className="field">
        <span>What would a good result look like?</span>
        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
          minLength={10}
          maxLength={1600}
          rows={5}
          aria-describedby="brief-private"
        />
      </label>
      <div className="form-pair">
        <label className="field">
          <span>Your name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            autoComplete="name"
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={254}
            autoComplete="email"
          />
        </label>
      </div>
      <div className="form-pair">
        <label className="field">
          <span>Budget range (optional)</span>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            maxLength={100}
          />
        </label>
        <label className="field">
          <span>Target date (optional)</span>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            maxLength={100}
          />
        </label>
      </div>
      <label className="privacy-checkbox">
        <input type="checkbox" required />
        <span>
          I have read the{" "}
          <Link href="/privacy" target="_blank" rel="noopener">
            privacy policy
          </Link>
          .
        </span>
      </label>
      <div className="actions">
        <button className="button button-clay" type="submit">
          Prepare email draft
        </button>
        <a
          className="text-button"
          href={
            "data:text/plain;charset=utf-8," +
            encodeURIComponent(composeDraft())
          }
          download="hashbay-project-brief.txt"
          onClick={download}
        >
          Download brief
        </a>
      </div>
      <p className="small">
        Your brief stays in this browser tab. You review and send the email
        yourself.
      </p>
      <p className="small" id="brief-private">
        Please leave out passwords, financial details, private customer data and
        sensitive system information.
      </p>
      <p className="status-message" role="status">
        {message}
      </p>
      {draft && (
        <section className="brief-preview" aria-label="Prepared email draft">
          <h2>Review your draft.</h2>
          <p className="small">To: {company.email}</p>
          <div className="preview-body">{draft}</div>
          <div className="actions">
            <a href={mailHref} className="button">
              Open email app
            </a>
            <button type="button" className="text-button" onClick={copy}>
              Copy draft
            </button>
          </div>
          <p className="small" style={{ marginTop: 18 }}>
            If an email app does not open, copy the draft or download the brief
            and send it to the address above.
          </p>
        </section>
      )}
    </form>
  );
}
