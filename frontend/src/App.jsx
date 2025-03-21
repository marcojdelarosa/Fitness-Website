import "./App.css";
import Header from "./Header.jsx";

fetch("http://localhost:3000/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email: "yes", password: "MM" }),
}).then((value) => value.json().then((thing) => console.log(thing)));

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
