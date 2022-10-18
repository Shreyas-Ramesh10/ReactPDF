import React from 'react';
import { Text, View, StyleSheet,  } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    floatContainer : {
        marginTop:10,
        flexDirection: "row",
        justifyContent:"space-between",
        
       
    },
    floatChild: {
        justifyContent:"space-between",
        width: 250,
        height: 100,
        padding: 5,
        border: 1,
        marginRight:20,
    },
    text:{
       fontSize:11,
       
    },
    floatChildParent:{
        flexDirection:"row",
        border:1
    },
    floatChild2: {
        justifyContent:"space-between",
        width: 100,
        height: 100,
        padding: 5,
        marginRight:20,
    },
    floatChild3:{
        justifyContent:"space-between",
        width: 100,
        height: 100,
        padding: 5,
        marginRight:20,
        justifyContent:"center",
    },
});

const InvoiceTitle = () => (
    <View style={styles.floatContainer}>
        
        <View style={styles.floatChild} >
            <Text style={styles.text}>First Name: MARCOS</Text>
            <Text style={styles.text}>Last Name: ARUJO</Text>
            <Text style={styles.text}>Phone:(774)224-8018</Text>
            <Text style={styles.text}>Street: 07 MARSHALL AVE</Text>
            <Text style={styles.text}>City: NATICK</Text>
            <Text style={styles.text}>State: MA  ZIP: 01760</Text>
        </View>
        
        <View style={styles.floatChildParent} >
            <View style={styles.floatChild2} >
                <Text style={styles.text} >VIN (Scan):</Text>
                <Text style={styles.text} >VIN (manual):</Text>
                <Text style={styles.text} >Year: 2006</Text>
                <Text style={styles.text} >Model: ODYSSEY</Text>
                <Text style={styles.text} >Make: HONDA</Text>
                <Text style={styles.text} >License Plate:</Text>
            </View>
            <View style={styles.floatChild3} >
               <Text style={styles.text} >Color: GRY</Text>
            </View>
        </View>
    </View>

    
);

export default InvoiceTitle;