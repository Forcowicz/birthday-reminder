import styles from "./PeopleList.module.css";
import Person from "./Person";

const PeopleList = function (props) {
  const removePersonHandler = function (personId) {
    props.onRemovePerson(personId);
  };

  return (<ul className={styles["people-list"]}>
    {props.people.map(person => <Person firstName={person.firstName}
                                        lastName={person.lastName}
                                        date={person.date}
                                        key={person.id}
                                        id={person.id}
                                        onRemovePerson={removePersonHandler}/>)}
  </ul>);
};

export default PeopleList;