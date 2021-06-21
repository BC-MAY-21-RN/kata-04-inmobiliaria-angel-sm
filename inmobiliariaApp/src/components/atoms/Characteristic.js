import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Characteristic = ({total, icon = '', base = '', exponente = ''}) => {
    return (
       <View style={styles.content}>
            <Image
                style={{width: 25, height:20}}
                source={{
                    uri: icon
                }}
            />
            <Text style={styles.total}>{total}</Text>
            <View style={styles.content}>
                <Text style={styles.base}>{' '+base}</Text>
                <Text style={styles.exponente}>{exponente}</Text>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '33%'
    },
    total: {
        paddingLeft: 9,
        fontSize: 17,
        fontWeight: 'bold',
    },
    base: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    exponente: {
        transform: [{ translateY: -5 }],
        fontSize: 12,
        fontWeight: 'bold',
    },
})