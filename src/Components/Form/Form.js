import styles from "./Form.module.css";

import { v4 as uuid } from "uuid";
import { useState } from "react";
import Button from "../UI/Button";

const Form = function (props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");

  const firstNameHandler = e => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = e => {
    setLastName(e.target.value);
  };

  const dateHandler = e => {
    setDate(e.target.value);
  };

  const areInputsValid = function (...strings) {
    return !strings.some(s => s.trim().length === 0);
  };

  const submitFormHandler = function (e) {
    e.preventDefault();

    if (!areInputsValid(firstName, lastName, date)) return;

    const personData = {
      firstName,
      lastName,
      date,
      id: uuid()
    };

    props.onAddPerson(personData);

    setFirstName("");
    setLastName("");
    setDate("");
  };

  return (<form className={styles.form} onSubmit={submitFormHandler}>
    <div className={styles["form-control"]}>
      <label htmlFor="firstName" className={styles["form-label"]}>Enter first name</label>
      <input type="text"
             value={firstName}
             onInput={firstNameHandler}
             placeholder="Enter first name"
             id="firstName"
             autoComplete="off"/>
    </div>
    <div className={styles["form-control"]}>
      <label htmlFor="lastName" className={styles["form-label"]}>Enter last name</label>
      <input type="text"
             value={lastName}
             onInput={lastNameHandler}
             placeholder="Enter last name"
             id="lastName"
             autoComplete="off"/>
    </div>
    <div className={styles["form-control"]}>
      <label htmlFor="date" className={styles["form-label"]}>Enter birth date</label>
      <input type="date" value={date} onChange={dateHandler} id="date"/>
    </div>
    <div className={styles["form-control"]}>
      <Button type="submit">Add Birthday</Button>
    </div>
  </form>);
};

export default Form;