import logo from "./logo.svg";
import "./App.css";
import { Students } from "./dataLab";
// import { StudentTable } from "./studentList";
import { GpaTable } from "./gpaList";

function App() {
  return (
    <div className="container">
      <GpaTable></GpaTable>
    </div>
  );
}

export default App;
