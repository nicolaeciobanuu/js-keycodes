import  React, {useEffect, useState} from 'react';
import { CodeDisplay, KeyDisplay, InitialMessage} from "./components";
import { SC } from "./styled";
export const App = () => {
  document.title = "JS-KeyCodes";
  const [keyboardKey, setKeyboardKey] = useState("");
  const [code, setCode] = useState(0);
  const audio = new Audio("key.mp3");

  useEffect(() => {
    document.addEventListener("keyup", handleKey);
    return () => {
      document.removeEventListener("keyup", handleKey)
    }
  }, [])
  const handleKey = (event: any): any => {
    setKeyboardKey(event.key);
    setCode(event.keyCode);
  }
  return (
    <SC.App>
      {!code && <InitialMessage/>}
      <CodeDisplay code={code} />
      <KeyDisplay keyboardKey={keyboardKey===" "? "Space" : keyboardKey}/>
    </SC.App>
  )
}
    


export default App;
