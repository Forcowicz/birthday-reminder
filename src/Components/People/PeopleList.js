import styles from "./PeopleList.module.css";
import Person from "./Person";

const PeopleList = function (props) {
  return (<ul className={styles['people-list']}>
        {props.people.map(person => <Person firstName={person.firstName}
                                            lastName={person.lastName}
                                            date={person.date}
                                            key={person.id}/>)}
      </ul>);
};

export default PeopleList;