import "./globa.css";
import { Button } from "./components/button";
import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.container}>
      {/* <h1>Hello World</h1> */}
      <Button name="Adicionar" />
      <span>0</span>
      <Button name="Remover" />
    </div>
  )
}