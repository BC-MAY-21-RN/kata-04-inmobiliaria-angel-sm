import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Price = ({ price = 0 }) => (<Text style={styles.price}>{
    price > 1000 
        ? '$' + price.toString().replace(/(000$)/g, '/m') 
        : price
    }</Text>)

const styles = StyleSheet.create({
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    }
})