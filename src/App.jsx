import React, { memo } from "react";
import { Input_1 } from "./Components";
import Main from "./Admin/Main";

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <h1>App</h1>
      <div style={{ width: 300, height: 50, marginLeft: 100 }} >
        <Input_1 textColor={"#777"} stickColor={"#202020"} placeholder={"Hello"} />
      </div>
    </div>
  );
=======
    return (
        <div className="App">
            <Main />
        </div>
    );
>>>>>>> b6deb76d1f597613ad166ae7bce118c3b5fc61f8
}

export default memo(App);
