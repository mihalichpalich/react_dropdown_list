import React from "react";
import DropdownList from "./DropdownList/DropdownList";
import data from "./menuItems.json";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

function App() {
  return <DropdownList data={data} />;
}

export default App;
