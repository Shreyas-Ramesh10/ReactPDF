import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import LebronStretch from "../photos/sign.png";


const styles = StyleSheet.create({
    floatContainer : {
       
        flexDirection: "row",
        justifyContent:"flex-start",
        
     }, 
    image:{
        marginLeft:10,
        marginTop:6,
        justifyContent:"flex-end",
        height:60,
        width:120
       }
});

const SignImage = () => (
    <View style={styles.floatContainer}>
        <Image style={styles.image} src={LebronStretch} />
    </View>

    
);

export default SignImage;