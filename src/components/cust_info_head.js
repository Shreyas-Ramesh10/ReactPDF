import React from 'react';
import { Text, View, StyleSheet,  } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    floatContainer : {
        marginTop:20,
        flexDirection: "row",
        justifyContent:"space-between",
        
       
    },
    floatChild: {
        
        width: 400,
        
       alignItems:"center",
    },
   
});

const HeadingOne = () => (
    <View style={styles.floatContainer}>
      
        <View style={styles.floatChild} >
            <Text>Customer Information</Text>
        </View>
        
        <View style={styles.floatChild} >
            <Text>Vehicle Information</Text>
        </View>
    </View>

    
);

export default HeadingOne;