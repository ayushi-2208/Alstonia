import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./component/Table";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  console.log(tableData);
  //  console.log(tableData)
  return (
    <div>
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
