import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Price } from '../atoms/Price'
import { Favorite } from '../atoms/Favorite'

export const CardFooter = ({ price }) => {
    return (
         <View style={styles.footerContent}>
             <Price price={price} />
             <Favorite with={30} heigth={30} />
         </View>
    )
};

const styles = StyleSheet.create({
    footerContent: {
        display: 'flex',
        flexDirection: 'row',
    }
})