import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Star from '../../assets/images/Star.svg'
import { theme } from '../../shared/theme';

export const Ranking = ({ total= 0 }) => {
    return (
       <View style={styles.content}>
           <Star width={14} height={14} />
           <Text style={styles.total}>{total}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    content:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    total:{
        marginLeft: 3,
        color: theme.color.yellowBalck,
        fontWeight: 'bold'
    }
})