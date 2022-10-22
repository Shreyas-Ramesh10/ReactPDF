import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000';
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop:10,
        border:0,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
        backgroundColor:"#FFC0CB",
    },
    description: {
        width: '85%',
        textAlign: 'right',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});


let data = [
    {
        sno: 1,
        desc: "FinePix Pro2 3D Camera",
        qty: 2,
        rate: 1600.00,
    },
    {
        sno: 2,
        desc: "Luxury Ultra thin Wrist Watch",
        qty: 1,
        rate: 300.99,
    },
    {
        sno: 3,
        desc: "Duracell Ultra Alkaline Battery AA, 4 pcs",
        qty: 1,
        rate: 145.99,
    }
]


const InvoiceTableFooter = () => {
    const total = data.map(data => data.qty * data.rate)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.total}>{Number.parseFloat(total).toFixed(2)}</Text>
        </View>
    )
};

export default InvoiceTableFooter;