import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    floatContainer : {  
        flexDirection: "row",   
        
    },
    floatChild: {
        marginRight:150,
           
    },
    floatChild2: {
        marginLeft:150, 
    },
    text:{
        marginTop:5,
        fontSize:10,
    },
    
       
    
});

const Footer = () => (
    <View style={styles.floatContainer}>
        <View style={styles.floatChild} >
            <Text style={styles.text}>Signature of Claimant/Policy Holder    Date:  </Text>
            <Text style={styles.text}>Print Name: MARCOS</Text>
        
        </View>


        <View style={styles.floatChild2} >
            <Text style={styles.text}>Definitions</Text>
            <Text style={styles.text}>Adj.-Adjuster</Text>

            
        </View>
     </View>

    
);

export default Footer;