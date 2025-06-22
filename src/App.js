import React, { Component } from "react";
import Counter from "./components/Counter.js";
import Collage from "./components/Collage.js";
import { subjectContext } from "./components/ContexData.js";
import { studentContext } from "./components/Student.js";
import StudentDataDisplay from "./components/StudentDataDisplay.js";
import ReactMemo from "./components/memo/ReactMemo.js";

class App extends Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      count: 0,
      name: "Rohit",
      subject: "",
      student: "hello",
    };
  }

  componentDidMount() {
    console.log("componentDidMount :  when component rendered first Time");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount  : component removed");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>{this.state.name}</h1>

        <Counter number={this.state.count} />
        <button onClick={() => this.increment()}>Click me</button>

        <div style={{ backgroundColor: "yellow", padding: "30px" }}>
          <subjectContext.Provider value={this.state.subject}>
            <studentContext.Provider value={this.state.student}>
              <select
                value={this.state.subject}
                onChange={(event) => {
                  this.setState({ subject: event.target.value });
                }}
              >
                <option value={""}>Select</option>
                <option value={"Maths"}>Maths</option>
                <option value={"History"}>History</option>
                <option value={"English"}>English</option>
              </select>
              <h1> Main Component</h1>
              {/* <h2>Student Data : {this.state.student}</h2> */}
              <StudentDataDisplay />
              <button onClick={() => this.setState({ subject: "" })}>
                Clear
              </button>
              <Collage />
              <ReactMemo />
            </studentContext.Provider>
          </subjectContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
