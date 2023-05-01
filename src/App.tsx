import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Hompage from "./pagse/Hompage";
import Navber from "./pagse/Navber";
import Pagination from "./components/Pagination";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navber />
      {/* <Header /> */}
      <Hompage />
      
    </>
  );
}

export default App;
