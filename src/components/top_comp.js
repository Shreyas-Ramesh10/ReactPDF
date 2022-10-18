import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import LebronStretch from "../photos/company_photo.png";


const styles = StyleSheet.create({
    floatContainer : {
       
        flexDirection: "row",
        justifyContent:"space-around",
        
           
    },
    floatChild: {
        alignItems:'center',
        width: 140,
        height: 180,
        justifyContent:"center"
    },
    
    text:{
        marginTop:5,
        fontSize:10,
    },
    image:{
        justifyContent:"flex-start",
        width: 400,
        height: 200,
       
    }
});

const TopComponent = () => (
    <View style={styles.floatContainer}>


        <Image style={styles.image} src={LebronStretch} />
        
        <View style={styles.floatChild} >
            <Text style={styles.text}>Repair Shop Registration:</Text>
            <Text style={{fontSize:13, fontWeight:"extrabold", alignItems:'center'}}>RS#5269</Text>
         
            <Text style={styles.text}>Tax Identification Number:</Text>
            <Text style={{fontSize:13, fontWeight:"extrabold", alignItems:'center'}}>84-2714857</Text>

            <Text style={styles.text}>Office Hours:</Text>
            <Text style={styles.text}>Monday - Friday</Text>
            <Text style={{fontSize:13, fontWeight:"extrabold", alignItems:'center'}}>8:00AM - 5:00PM</Text>

            <Text style={styles.text}>Saturday</Text>
            <Text style={{fontSize:13, fontWeight:"extrabold", alignItems:'center'}}>By appointment only</Text>
        </View>
        


        
         
            
       
    </View>

    
);

export default TopComponent;