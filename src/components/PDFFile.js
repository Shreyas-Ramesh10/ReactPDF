import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

import InvoiceTitle from "./cust_info";
import HeadingOne from './cust_info_head';
import DtpHeading from './dtp_heading';
import DtpInfo from "./dtp_info";
import TopComponent from "./top_comp";
import TopMid from "./top_mid";
import Footer from "./Footer";
import SignImage from "./sign-image";

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

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <TopComponent/>
        <TopMid/>
        <HeadingOne/>
        <InvoiceTitle/>
        <DtpHeading/>
        <DtpInfo/>
        <Text style={styles.text}>
        I hereby authorize {companyName} to make the above specified repair or repairs from the appraiser's estimate. I
"understand that payment in full will be due before the vehicle can be released, including additional supplemental damage charges, and hereby grant you and/or your employees permission to operate the vehicle herein described on streets, highways or elsewhere for the purposes of testing and/or inspection. An express mechanic's lien is hereby acknowledged on above vehicle to secure the amount of repairs thereto. If I decide not to repair this vehicle, I understand that any storage,"
"labor, and administrative fees due on the claim will need to be paid in full before the vehicle can be released. I will not hold you responsible for any lost articles left in the vehicle, in case of fire,accident or any other cause beyond our control. Old parts removed from the vehicle will be disposed off unless otherwise instructed. Iauthorize you to act as power of attorney to sign."
        </Text>

        <Text style={styles.text}>
        "By signing this statement, I hereby authorize the insurance to make ALL claims and/or supplement payments due to for the"
"repairs of my vehicle directly to {companyName}, 332 Irving St. Framingham MA 01702."
        </Text>
        <SignImage/>
        <Footer/>
      </Page>
    </Document>
  );
};

export default PDFFile;
