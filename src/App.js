import "./App.css";

import { useState } from "react";
import Form from "./Components/Form/Form";
import PeopleList from "./Components/People/PeopleList";

const CACHED_PEOPLE = JSON.parse(localStorage.getItem("people")) || [];

function App() {
  const [people, setPeople] = useState(CACHED_PEOPLE);

  const savePeopleToLocalStorage = function (peopleArr) {
    localStorage.setItem("people", JSON.stringify(peopleArr));
  };

  const addPersonHandler = function (personData) {
    setPeople(oldPeople => [...oldPeople, personData]);

    savePeopleToLocalStorage([...people, personData]);
  };

  const removePersonHandler = function (personId) {
    const peopleWithRemovedPerson = people.filter(el => el.id !== personId);

    setPeople(peopleWithRemovedPerson);

    savePeopleToLocalStorage(peopleWithRemovedPerson);
  };

  return (<div className="wrapper">
    <Form onAddPerson={addPersonHandler}/>

    <PeopleList people={people} onRemovePerson={removePersonHandler}/>
  </div>);
}

export default App;
