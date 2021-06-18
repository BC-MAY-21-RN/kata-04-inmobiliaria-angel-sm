import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Characteristic  } from '../atoms/Characteristic'

export const CardBody = ({ characteristics = [] }) => {
    return (
         <View style={styles.list}>
             {
                characteristics.map((characteristic) => {
                    return (
                        <Characteristic 
                            total={characteristic.total} 
                            icon={characteristic.icon} 
                            key={characteristic.name} 
                        />
                    )
                }
                )
             }
         </View>
    )
};

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    }
})