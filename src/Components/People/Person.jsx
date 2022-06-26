import styles from "./Person.module.css";

const Person = function (props) {
  const calcDaysPassed = date => {
    return (Math.round(new Date(`${new Date().getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`) - new Date()) / (1000 * 60 * 60 * 24));
  };

  const calcAge = date => Math.floor(Math.abs(new Date() - date) / (1000 * 60 * 60 * 24 * 365));

  const formatDate = date => {
    return new Intl.DateTimeFormat("pl-PL", {
      day: "numeric",
      month: "long"
    }).format(date);
  };

  const daysUntilBirthday = calcDaysPassed(new Date(props.date));

  const personClickHandler = function (e) {
    props.onRemovePerson(e.target.closest("li").dataset.id);
  };

  let personDateClasses = `${styles.person__date} `;

  if (daysUntilBirthday <= 10 && daysUntilBirthday > -1) personDateClasses += styles["person__date--close"];
  if (daysUntilBirthday <= -1 && daysUntilBirthday > -11) personDateClasses += styles["person__date--missed"];

  return (<li className={styles.person} data-id={props.id} onClick={personClickHandler}>
    <span className={styles.person__name}>{`${props.firstName} ${props.lastName} (${calcAge(new Date(props.date))})`}</span>
    <span className={personDateClasses}>{formatDate(new Date(props.date))}</span>
  </li>);
};

export default Person;