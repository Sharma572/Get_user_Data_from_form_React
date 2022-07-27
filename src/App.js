import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [intrest, setInterest] = useState(" ");
  const [tAndC, setTandC] = useState(false);

  function getUserData(ev) {
    console.log(name, email, intrest, tAndC); // check console after submit form to see data you entered.
    ev.preventDefault();
  }

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <p>Here we will handle form data</p>

      <form onSubmit={getUserData}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(ev) => setName(ev.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(ev) => setEmail(ev.target.value)}
        />{" "}
        <br />
        <br />
        <select onChange={(ev) => setInterest(ev.target.value)}>
          <option>Select option</option>
          <option>Jobs</option>
          <option>Projects</option>
          <option>Query</option>
        </select>{" "}
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(ev) => setTandC(ev.target.checked)}
        />{" "}
        <span style={{ fontSize: "12px" }}> Accept our T&C </span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
