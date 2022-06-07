import React , { memo } from "react";
import { Input_1 } from "./Components";


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <div style={{width: 300 , height: 50 , marginLeft: 100}} >
        <Input_1 textColor={"#777"} stickColor={"#202020"} placeholder={"Hello"} />
      </div>
    </div>
  );
}

export default memo(App);
