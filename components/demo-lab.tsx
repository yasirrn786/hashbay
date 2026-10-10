"use client";
import { useRef, useState } from "react";
import { downloadText } from "@/lib/download";

type TaskStatus = "To do" | "In progress" | "Complete";
type Task = { id: number; name: string; status: TaskStatus };
const seed: Task[] = [
  { id: 1, name: "Review backup coverage", status: "To do" },
  { id: 2, name: "Document the network", status: "In progress" },
  { id: 3, name: "Confirm account ownership", status: "Complete" },
];
const money = (n: number) =>
  "INR " +
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(n);

function Workflow() {
  const [tasks, setTasks] = useState<Task[]>(seed);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("All tasks");
  const [message, setMessage] = useState("");
  const nextId = useRef(4);
  function add(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      setMessage("Enter a task before adding it.");
      return;
    }
    if (tasks.length >= 100) {
      setMessage(
        "This sample supports up to 100 tasks. Reset the sample to start again.",
      );
      return;
    }
    const taskId = nextId.current++;
    setTasks((prev) => [
      ...prev,
      { id: taskId, name: name.trim(), status: "To do" },
    ]);
    setName("");
    setMessage(
      "Task added. Change the filter to All tasks to see the full list.",
    );
  }
  function change(id: number) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const status: TaskStatus =
      task.status === "To do"
        ? "In progress"
        : task.status === "In progress"
          ? "Complete"
          : "To do";
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    setMessage(task.name + ": " + status + ".");
  }
  const shown = tasks.filter(
    (t) => filter === "All tasks" || t.status === filter,
  );
  return (
    <section className="lab-workflow" aria-label="Workflow tracker">
      <div className="lab-controls">
        <h2>Make the next step visible.</h2>
        <p>
          Add a task, change its status and filter the list. Sample data stays
          in this browser tab.
        </p>
        <form onSubmit={add}>
          <label className="field">
            <span>Task</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What needs to happen?"
              maxLength={100}
              required
              autoComplete="off"
            />
          </label>
          <button className="button" type="submit">
            Add task
          </button>
        </form>
        <label className="field">
          <span>Filter</span>
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setMessage("");
            }}
          >
            {["All tasks", "To do", "In progress", "Complete"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <p className="status-message" role="status">
          {message}
        </p>
        <button
          className="text-button small"
          onClick={() => {
            setTasks(seed);
            nextId.current = 4;
            setFilter("All tasks");
            setName("");
            setMessage("Sample reset.");
          }}
        >
          Reset sample
        </button>
      </div>
      <div>
        <div className="table-wrap">
          <table className="task-table">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {shown.length ? (
                shown.map((t) => (
                  <tr key={t.id}>
                    <td>{t.name}</td>
                    <td>{t.status}</td>
                    <td>
                      <button
                        className="button button-clay"
                        aria-label={`${t.status === "To do" ? "Start" : t.status === "In progress" ? "Complete" : "Reopen"}: ${t.name}`}
                        onClick={() => change(t.id)}
                      >
                        {t.status === "To do"
                          ? "Start"
                          : t.status === "In progress"
                            ? "Complete"
                            : "Reopen"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>
                    No tasks in this view. Choose another filter or add a task.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="demo-note">
          Sample data only. No connection to a client system. Reloading this
          page clears your changes.
        </p>
      </div>
    </section>
  );
}
function CloudWorksheet() {
  const [values, setValues] = useState({
    current: "10000",
    proposed: "8000",
    additional: "500",
    change: "6000",
  });
  const fields = [
    ["current", "Current monthly bill (INR)"],
    ["proposed", "Proposed monthly bill (INR)"],
    ["additional", "Additional monthly costs (INR)"],
    ["change", "One-time change cost (INR)"],
  ] as const;
  const valid = Object.values(values).every(
    (v) =>
      v.trim() !== "" &&
      Number.isFinite(Number(v)) &&
      Number(v) >= 0 &&
      Number(v) <= 1e9,
  );
  const difference =
    Number(values.current) -
    Number(values.proposed) -
    Number(values.additional);
  const annual = difference * 12 - Number(values.change);
  const payback = !valid
    ? "Enter valid costs"
    : difference > 0
      ? Number(values.change) === 0
        ? "Immediate"
        : Math.ceil(Number(values.change) / difference) + " months"
      : "No break-even";
  const download = () =>
    downloadText(
      "hashbay-cloud-cost-worksheet.txt",
      [
        "HASHBAY CLOUD COST WORKSHEET",
        "User-entered assumptions. Not a quotation or savings guarantee.",
        "",
        ...fields.map(([key, label]) => label + ": " + values[key]),
        "",
        "Estimated monthly difference: " + money(difference),
        "Break-even: " + payback,
        "First-year net difference: " + money(annual),
        "",
        "Assumes constant monthly costs over 12 months. Break-even is rounded up to whole months. Use consistent tax treatment and include support, licensing, storage, transfer, commitments and migration costs.",
        "Check performance, backup and rollback before changing a workload. The worksheet does not connect to any cloud account.",
      ].join("\n"),
    );
  return (
    <section className="cloud-worksheet" aria-label="Cloud cost worksheet">
      <h2>Look beyond the cloud bill.</h2>
      <p className="lead">
        Compare recurring cost, change cost and payback.
        <br />
        These are your assumptions, not a savings promise.
      </p>
      <div className="cloud-layout">
        <div className="cloud-fields">
          {fields.map(([key, label]) => (
            <label className="field" key={key}>
              <span>{label}</span>
              <input
                type="number"
                min="0"
                max="1000000000"
                step="0.01"
                inputMode="decimal"
                value={values[key]}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
            </label>
          ))}
        </div>
        <div className="cloud-result" aria-live="polite">
          <span>Estimated monthly difference</span>
          <h3
            style={
              valid && money(difference).length > 16
                ? { fontSize: 42 }
                : undefined
            }
          >
            {valid ? money(difference) : "Check the inputs"}
          </h3>
          <div className="result-rows">
            <div>
              <span>Break-even</span>
              <strong>{payback}</strong>
            </div>
            <div>
              <span>First-year net difference</span>
              <strong>{valid ? money(annual) : "Not calculated"}</strong>
            </div>
          </div>
          <p>
            Check performance, backup, licensing, support and rollback before
            changing a workload.
          </p>
          <button className="text-button" disabled={!valid} onClick={download}>
            Download worksheet
          </button>
        </div>
      </div>
      {!valid && (
        <p className="error-text" role="alert">
          Enter a cost between 0 and 1,000,000,000 in every field.
        </p>
      )}
      <div className="cloud-process">
        <h3>A safer first step.</h3>
        <div className="steps">
          {[
            [
              "Baseline",
              "Record the current bill and what it includes: compute, storage, data transfer, licensing and support.",
            ],
            [
              "Small trial",
              "Pick one non-critical workload. Agree the scope, time window, performance measures and rollback.",
            ],
            [
              "Compare",
              "Use the full recurring cost and one-time change cost. Compare the measured performance as well.",
            ],
            [
              "Approve",
              "Review the result with the system owner before applying a production change.",
            ],
          ].map(([title, text], i) => (
            <div className="step" key={title}>
              <span className="row-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="small muted" style={{ marginTop: 20 }}>
        Assumes constant monthly costs over 12 months. Break-even rounds up to a
        whole month. Use consistent tax treatment. Negative differences mean
        higher estimated costs. No cloud account is connected.
      </p>
    </section>
  );
}
export function DemoLab({
  initialDemo = "workflow",
}: {
  initialDemo?: "workflow" | "cloud";
}) {
  const [active, setActive] = useState(initialDemo);
  function tabKeys(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next =
      e.key === "Home"
        ? "workflow"
        : e.key === "End"
          ? "cloud"
          : active === "workflow"
            ? "cloud"
            : "workflow";
    setActive(next);
    const sibling =
      e.currentTarget.parentElement?.querySelector<HTMLButtonElement>(
        "#tab-" + next,
      );
    sibling?.focus();
  }
  return (
    <div className="container" style={{ paddingBottom: 50 }}>
      <div
        className="lab-tabs"
        role="tablist"
        aria-label="Choose a working demo"
      >
        {(
          [
            ["workflow", "Workflow tracker"],
            ["cloud", "Cloud cost worksheet"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            id={"tab-" + id}
            role="tab"
            aria-selected={active === id}
            aria-controls={"panel-" + id}
            tabIndex={active === id ? 0 : -1}
            onKeyDown={tabKeys}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        id="panel-workflow"
        role="tabpanel"
        aria-labelledby="tab-workflow"
        hidden={active !== "workflow"}
      >
        <Workflow />
      </div>
      <div
        id="panel-cloud"
        role="tabpanel"
        aria-labelledby="tab-cloud"
        hidden={active !== "cloud"}
      >
        <CloudWorksheet />
      </div>
    </div>
  );
}
