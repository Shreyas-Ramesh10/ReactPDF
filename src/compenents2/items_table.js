import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import InvoiceTableHeader from './table_header';
import InvoiceTableRow from './table_row';
import InvoiceTableFooter from './table_footer';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 6,
        borderWidth: 1,
    },
    text:{
        textAlign:"right", 
        fontStyle:"Bold",
        fontSize:11,
        marginTop: 24, 
    }
});

const InvoiceItemsTable = () => (
    <View>
        <Text style={styles.text} >Amount expressed in USD</Text>
        <View style={styles.tableContainer}>
            
            <InvoiceTableHeader />
            <InvoiceTableRow />
        </View>

        <View>
            <InvoiceTableFooter/>
        </View>

    </View>
);

export default InvoiceItemsTable;