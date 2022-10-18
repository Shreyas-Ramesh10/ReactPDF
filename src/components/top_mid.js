import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    floatContainer : {  
        flexDirection: "column",        
    },
    floatChild: {
        alignItems:'center',
        justifyContent:"center"
    },
    
    text:{
        marginTop:5,
        fontSize:8,
    },
    
       
    
});

const TopMid = () => (
    <View style={styles.floatContainer}>
        <View style={styles.floatChild} >
            <Text style={styles.text}>332 Irving St. Framingham, MA 01702 | OFFICE :508-251-2302| FAX: 508-251-2847</Text>
            <Text style={{fontSize:18, fontWeight:900, marginTop:10, marginBottom:-10}}>CUSTOMER INTAKE SHEET</Text>
        
        </View>
     </View>

    
);

export default TopMid;