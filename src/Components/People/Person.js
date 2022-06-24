import styles from "./Person.module.css";

const Person = function (props) {
  const calcDaysPassed = date => {
    return (Math.round(new Date(`${new Date().getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`) - new Date()) / (1000 * 60 * 60 * 24));
  };

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

  return (<li className={styles.person} data-id={props.id} onClick={personClickHandler}>
    <span className={styles.person__name}>{props.firstName} {props.lastName}</span>
    <span className={`${styles.person__date} ${daysUntilBirthday <= 10 && daysUntilBirthday >= 0 ? styles["person__date--close"] : ""}`}>{formatDate(new Date(props.date))}</span>
  </li>);
};

export default Person;