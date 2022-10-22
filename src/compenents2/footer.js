import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    floatContainer : {  
        flexDirection: "row",
        marginTop:6,  
        borderTop:0.7,
        borderColor:"#454545",
        marginTop:100,
        
    },
    floatChild: {
        alignText:"center",
        alignItems:'center',
        justifyContent:'center',
        marginLeft:170,
        color:"#454545",
    },
    text:{
        marginTop:5,
        fontSize:11,
        fontSize:10
    },
    
       
    
});

const CompanyName = "Ivan's Collision Center"

const Footer = () => (
    <View style={styles.floatContainer}>
        <View style={styles.floatChild} >
            <Text style={styles.text}></Text>
            <Text style={styles.text}>{CompanyName}.</Text>
            <Text style={styles.text}>Form: v1.0.2 Rev. 12/12/20, Exp. 11/03/21</Text>
            
        
        </View>
     </View>

    
);

export default Footer;