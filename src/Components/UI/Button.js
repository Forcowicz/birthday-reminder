import styles from "./Button.module.css";

const Button = function (props) {
  return <button className={styles.btn}>{props.children}</button>;
};

export default Button;