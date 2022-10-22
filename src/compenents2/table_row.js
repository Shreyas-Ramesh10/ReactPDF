import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        fontSize:11,
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '60%',
        textAlign: 'left',
       
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '10%',
        
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});


let data = [
    {
        sno: 1,
        desc: "Item 1",
        qty: 2,
        rate: 1600.00,
    },
    {
        sno: 2,
        desc: "Item 2",
        qty: 1,
        rate: 300.99,
    },
    {
        sno: 3,
        desc: "Item 3",
        qty: 1,
        rate: 145.99,
    }
]



const InvoiceTableRow = () => {
    const rows = data.map(data =>
        <View style={styles.row} key={data.sno.toString()}>
            <Text style={styles.description}>{data.desc}</Text>
            <Text style={styles.qty}>{data.qty}</Text>
            <Text style={styles.rate}>{data.rate}</Text>
            <Text style={styles.amount}>{(data.qty * data.rate).toFixed(2)}</Text>
        </View>
    );
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow;