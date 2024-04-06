import { useState, useEffect } from "react";
import "./App.css";
import { List } from "./components/List";
import { AddToList } from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // const [count, setCount] = useState<number | string>(0);
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "lebron james",
      age: 36,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      url: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
    },
  ]);

  // useEffect(()=>{

  // people.map((person) => {
  //   alert(person.age);
  // });
  // },[])

  // console.log(dta);

  // setCount("boo");

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
