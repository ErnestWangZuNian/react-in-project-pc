import style from "./style.scss";

import { useEffect } from "react";

import { Button } from "antd";

function App() {
  useEffect(() => {
    console.log(document.getElementsByClassName("home-container"));
  }, []);
  return (
    <div className={`${style["home-container"]} home-container`}>
      <Button type="primary">测速</Button>
    </div>
  );
}

export default App;
