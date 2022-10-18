import React from 'react';
import { Text, View, StyleSheet,  } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    floatContainer : {
        marginTop:5,
        flexDirection: "column",
    },
    floatChild: {
       alignItems:"center",
    },
    Heading:{
        fontSize:16,
        fontWeight:"extrabold",
    },
   
});

const DtpHeading = () => (
    <View style={styles.floatContainer}>
      
        <View style={styles.floatChild} >
            <Text style={styles.Heading}>DIRECTION TO PAY (INSURANCE)</Text>
        </View>
    </View>

    
);

export default DtpHeading;