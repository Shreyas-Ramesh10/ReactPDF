import "./App.css";
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import PDFFile2 from "./compenents2/PDFFile2";
import PDFFile from "./components/PDFFile";


const App = () => {
  return (
    <div className="App">
    <PDFDownloadLink document = { <PDFFile/> } fileName="FORM">
      {({loading}) => 
      loading ? (
        <button>Loading...</button>
        ) : ( 
          <button>Download</button>
        )
      } 
    </PDFDownloadLink>
      
    </div>
  );
};

export default App;
