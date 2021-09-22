import React, { useState } from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from "axios";

const SEPractice = () => {
  const [selectedPractice, setSelectedPractice] = useState("");
  const [articles1, setArticles1] = useState([]);
  const practiceHandler = (p) => {
    setSelectedPractice(p);
    if (p === "") {
      setArticles1([]);
    } else {
      axios
        .get(`http://localhost:8080/articles/${p}`)
        .then(function (response) {
          setArticles1(response.data);
        });
    }
  };
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <h3>{selectedPractice}</h3>
      <Dropdown parentCallback={practiceHandler} />
      <Styles>
        <Table data={articles1} columns={tablecolumns} />
      </Styles>
    </div>
  );
};
 
export default SEPractice;  
