import styles from "./Form.module.css";

import { v4 as uuid } from "uuid";
import { useRef } from "react";
import Button from "../UI/Button";

const Form = function (props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateRef = useRef();

  const areInputsValid = function (...strings) {
    return !strings.some(s => s.trim().length === 0);
  };

  const submitFormHandler = function (e) {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const date = dateRef.current.value;

    if (!areInputsValid(firstName, lastName, date)) return;

    const personData = {
      firstName,
      lastName,
      date,
      id: uuid()
    };

    props.onAddPerson(personData);

    firstNameRef.current.value = lastNameRef.current.value = dateRef.current.value = "";
  };

  return (<form className={styles.form} onSubmit={submitFormHandler}>
    <div className={styles["form-control"]}>
      <label htmlFor="firstName" className={styles["form-label"]}>Enter first name</label>
      <input type="text"
             placeholder="Enter first name"
             id="firstName"
             autoComplete="off"
             ref={firstNameRef}/>
    </div>
    <div className={styles["form-control"]}>
      <label htmlFor="lastName" className={styles["form-label"]}>Enter last name</label>
      <input type="text"
             placeholder="Enter last name"
             id="lastName"
             autoComplete="off"
             ref={lastNameRef}/>
    </div>
    <div className={styles["form-control"]}>
      <label htmlFor="date" className={styles["form-label"]}>Enter birth date</label>
      <input type="date" id="date" ref={dateRef}/>
    </div>
    <div className={styles["form-control"]}>
      <Button type="submit">Add Birthday</Button>
    </div>
  </form>);
};

export default Form;