import React from 'react';
import { Text, View, StyleSheet,  } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    floatContainer : {
        marginTop:5,
        flexDirection: "column",
    },
    floatChild: {
       alignItems:"flex-start",
       color:"#FF0000",
    },
    Heading:{
        fontSize:16,
        
        fontWeight:"extrabold",
    },
   
});

const DtpHeading = () => (
    <View style={styles.floatContainer}>
      
        <View style={styles.floatChild} >
            <Text style={styles.Heading}>PAYMENTS DUE WITHIN 5 DAYS</Text>
        </View>
    </View>    
);

export default DtpHeading;