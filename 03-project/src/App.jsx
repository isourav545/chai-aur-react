import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    userName: "Sourav",
    age: 24,
  };
  return (
    <>
      <h1 className="bg-green-400 rounded-lg text-black mb-4 p-4 text-xl">
        Tailwind Test
      </h1>
      <Card
        username="Chai aur Code"
        someObj={myObj}
        dummyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?"
      />
      <Card
        username="Coder's Gyan"
        dummyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?"
        btnText="Click Me"
      />
    </>
  );
}

export default App;
