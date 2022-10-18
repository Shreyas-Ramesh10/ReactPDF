import React from 'react';
import { Text, View, StyleSheet,  } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    floatContainer : {
        marginTop:10,
        flexDirection: "row",
        justifyContent:"space-between",
        border: 1,
        padding:2
        
       
    },
    floatChild: {
        
        width: 100,
        height: 100,
    },
    
    floatChild2: {
        
        width: 100,
        height: 100,
       
    },
    floatChild3:{
        
        width: 100,
        height: 100,
        justifyContent:"flex-start",
        marginRight:40
    },
    text:{
        marginTop:5,
        fontSize:10,
    },
});

const DtpInfo = () => (
    <View style={styles.floatContainer}>
        
        <View style={styles.floatChild} >
            <Text style={styles.text}>Claim #:</Text>
            <Text style={styles.text}>Date in:</Text>
            <Text style={styles.text}>Adj. Name:</Text>
            <Text style={styles.text}>Adjuster Fax:</Text>
            <Text style={styles.text}>Appraiser Name:</Text>
            <Text style={styles.text}>insured By:</Text>
        </View>
        


        
            <View style={styles.floatChild2} >
                <Text style={styles.text} >Date of Loss:</Text>
                <Text style={styles.text}>Reported:</Text>
                <Text style={styles.text} >Adj. Phone:</Text>
                <Text style={styles.text} >Appraiser Phone:</Text>
                <Text style={styles.text} >Deductible:</Text>
                <Text style={styles.text} >Type:</Text>
            </View>
            
        



        
            <View style={styles.floatChild3} >
                <Text style={styles.text} >Adj. Mail:</Text>
                <Text style={styles.text} >abc@abc.com</Text>
                <Text style={styles.text} >Appraiser Email:</Text>
                <Text style={styles.text} >xyz@xyz.com:</Text>
                
            </View>
            
            
       
    </View>

    
);

export default DtpInfo;