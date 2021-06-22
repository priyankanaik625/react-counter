import "./App.css";
import { Counter } from "../components/Counter";
import { AddressBook } from "../components/AddressBook";

function App() {
  return (
    <div className="app">
      <Counter />
      <AddressBook />
    </div>
  );
}

export default App;
