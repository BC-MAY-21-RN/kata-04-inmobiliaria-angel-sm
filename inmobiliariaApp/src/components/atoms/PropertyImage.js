import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const PropertyImage = ({ url= '' }) => {
    return (
        <Image
            style={styles.propertyImage}
            source={{
                uri: url,
            }}
        />
    )
}

const styles = StyleSheet.create({
    propertyImage: {
        width: 120, 
        height: 120,
        borderRadius: 20
    }
})