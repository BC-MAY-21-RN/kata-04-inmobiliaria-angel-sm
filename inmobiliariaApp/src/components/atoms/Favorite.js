import React from 'react';
import { View, StyleSheet } from 'react-native';
import Heart from '../../assets/images/Heart.svg';
import { theme } from '../../shared/theme';

export const Favorite = (props) => (
    <View style={styles.greenContent}>
        <Heart width={15} heigth={15} />
    </View>
)

const styles = StyleSheet.create({
    greenContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        position: 'absolute',
        right: -10,
        bottom: 0,
        borderRadius: 100,
        backgroundColor: theme.color.green
    }
});