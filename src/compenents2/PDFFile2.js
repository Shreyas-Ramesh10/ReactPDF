import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

import InvoiceTitle from "./cust_info";
import DtpHeading from './dtp_heading';
import TopComponent from "./top_comp";
import InvoiceItemsTable from './items_table';
import Notes from './note';
import Footer from './footer'



const styles = StyleSheet.create({
 
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    marginTop:8,
    
    fontSize: 10,
    textAlign: "justify",
    
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const companyName = "Ivan's Collision Center";

const PDFFile2 = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <TopComponent/>
        <InvoiceTitle/>
        <DtpHeading/>
        <InvoiceItemsTable/>   
        <Notes/>
        <Footer/>
      </Page>
    </Document>
  );
};

export default PDFFile2;
