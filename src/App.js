import "./App.css";

import { useState } from "react";
import Form from "./Components/Form/Form";
import PeopleList from "./Components/People/PeopleList";

const CACHED_PEOPLE = JSON.parse(localStorage.getItem("people")) || [];

function App() {
  const [people, setPeople] = useState(CACHED_PEOPLE);

  const addPersonHandler = function (personData) {
    setPeople(oldPeople => [
      ...oldPeople,
      personData
    ]);

    localStorage.setItem("people", JSON.stringify([...people, personData]));
  };

  return (<div className="wrapper">
    <Form onAddPerson={addPersonHandler}/>

    <PeopleList people={people}/>
  </div>);
}

export default App;
