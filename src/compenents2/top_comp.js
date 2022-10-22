import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import LebronStretch from "../photos/Ivan.png";


const styles = StyleSheet.create({
    floatContainer : {
       
        flexDirection: "row",
        justifyContent:"space-around",
       
        
           
    },
    floatChild: {
        alignItems:'flex-end',
        width: 140,
        height: 180,
        justifyContent:"center",
        
        position:"relative",
        left:50
    },
    
    text:{
        marginTop:5,
        fontSize:10,
    },
    image:{
        marginTop:30,
        justifyContent:"flex-end",
        height:50,
        width:200,
        
        position:"relative",
        right:40,
        top:30,

        
    }
});

const TopComponent = () => (
    <View style={styles.floatContainer}>


        <Image style={styles.image} src={LebronStretch} />
        
        <View style={styles.floatChild} >
            <Text style={{fontSize:13, fontWeight:"extrabold", alignItems:'center'}}>Invoice</Text>
            <Text style={{fontSize:13, fontWeight:"extrabold", alignItems:'center'}}>PO#:1171</Text>
            <Text style={styles.text}>Invoice Date: December 15, 2020</Text>

            <Text style={{fontSize:13, fontWeight:"extrabold", alignItems:'center'}}>Vehicle Info</Text>

            <Text style={styles.text}>2014 Nissan NV200 SIL</Text>
            <Text style={styles.text}>Vin(4):9340</Text>
            
        </View>
        


        
         
            
       
    </View>

    
);

export default TopComponent;