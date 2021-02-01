import React from "react";
import MyFirstComponent from "./FullName";
import MySecondcomponent from "./Address";
import MyThirsdcomponent from "./PhotoProfile";

const App = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "red", fontSize: 60 }}>
          <MyFirstComponent />
        </h1>

        <MySecondcomponent />
        <MyThirsdcomponent />
      </div>
    </div>
  );
};
export default App;
