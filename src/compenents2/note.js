import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    floatContainer : {  
        flexDirection: "row",
        marginTop:6,   
        
    },
    floatChild: {
        alignText:"left" 
    },
    text:{
        marginTop:5,
        fontSize:11,
    },
    
       
    
});

const CompanyName = "Ivan's Collision Center"

const Footer = () => (
    <View style={styles.floatContainer}>
        <View style={styles.floatChild} >
            <Text style={{fontStyle: 'bold', fontSize:12}}>Note</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}>New Beginning Auto Services</Text>
            <Text style={styles.text}>Thank you for choosing {CompanyName}.</Text>
            <Text style={styles.text}>We value your Business.</Text>
        
        </View>
     </View>

    
);

export default Footer;
