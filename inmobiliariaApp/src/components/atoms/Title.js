import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Title = ({ title = '' }) => (<Text style={styles.title}>{title}</Text>)

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 2,
        fontWeight: 'bold'
    }
})