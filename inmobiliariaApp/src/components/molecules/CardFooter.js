import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Price } from '../atoms/Price'
import { Favorite } from '../atoms/Favorite'

export const CardFooter = ({ price }) => {
    return (
         <View style={styles.footerContent}>
             <Price price={price} />
             <Favorite />
         </View>
    )
};

const styles = StyleSheet.create({
    footerContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})