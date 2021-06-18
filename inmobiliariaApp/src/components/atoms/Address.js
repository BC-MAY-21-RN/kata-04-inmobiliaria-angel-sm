import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Location from '../../assets/images/Location.svg'

export const Adress = ({ address, iconProps }) => {
    return (
       <View style={styles.addressContent}>
           <Location width={18} height={18}  />
           <Text style={styles.address}>{address}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    addressContent:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    address: {
        marginLeft: 3
    }
})