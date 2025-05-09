// App.js
import React, { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";

const App = () => {
  const [name, setName] = useState("John");

  return (
    <div>
      <Header title={name} />
      <Counter />
    </div>
  );
};

export default App;
