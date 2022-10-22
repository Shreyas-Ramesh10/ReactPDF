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
        marginRight:20,
        backgroundColor:"#FFC0CB"
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
        width: 250,
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
            <Text style={styles.text}>Ivan's Collision Center</Text>
            <Text style={styles.text}>332 Irving St.</Text>
            <Text style={styles.text}>Framingham MA 01702</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}>Tel: 508-251-2302</Text>
            <Text style={styles.text}>Email:office@ivanscollisioncenter.net</Text>
            <Text style={styles.text}>Web:www.ivanscollisioncenter.net</Text>
        </View>
        
        <View style={styles.floatChildParent} >
            <View style={styles.floatChild2} >
                <Text style={styles.text} >Bill To:</Text>
                <Text style={styles.text} >New Beginning Auto Services Inc</Text>
                <Text style={styles.text} ></Text>
                <Text style={styles.text} >,</Text>
                <Text style={styles.text} >Phone: 508-251-2302</Text>
                <Text style={styles.text} >Email:Josecars123@yahoo.com</Text>
            </View>
            
        </View>
    </View>

    
);

export default InvoiceTitle;