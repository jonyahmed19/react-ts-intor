import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList.Component";
import List from "./components/List.Component";

export interface JState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
const initialState = [
  {
    name: "Sohag Khan",
    age: 25,
    url: "",
    note: "lorem ipsum dolor chivo",
  },
];

function App() {
  const [people, setPeople] = useState<JState["people"]>(initialState);
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
