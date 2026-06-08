import "./globa.css";
import { useState, useEffect } from "react";
import { Button } from "./components/button";
import styles from "./app.module.css";
//import { useMessage } from "./hooks/useMessage";

export function App() {
  //const message = useMessage({name: "Luiz"});

  const [ count, setCount ] = useState(0);

  useEffect(() => {
    
    if( count > 0 )
      console.log("Mudou")

  }, [count]);

  return (
    <div className={styles.container}>
      {/* <h1>Hello World</h1> */}
      <Button 
        name="Adicionar" 
        onClick={ () => setCount(count + 1) }
        //onClick={ () => show("Mensagem") }
      />
      <span>{ count }</span>
      <Button 
        name="Remover" 
        onClick={ () => count > 0 ? setCount(count - 1) : 0 }
      />
    </div>
  )
}