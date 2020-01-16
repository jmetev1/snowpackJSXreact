import React from "../web_modules/react.js";
import { Button } from "../web_modules/@material-ui/core.js";

export default function SomeReactComponent(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.a
        </p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React but faster
        </a>
      </header>
    </div>
  );
}
