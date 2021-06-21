import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Characteristic  } from '../atoms/Characteristic'

export const CardBody = ({ characteristics = [] }) => {
    return (
         <View style={styles.list}>
             {
                characteristics.map((characteristic, i) => {
                    return (
                        <Characteristic 
                            total={characteristic.total} 
                            icon={characteristic.icon} 
                            key={characteristic.name}
                            base={characteristic.name == 'size' ? 'ft' : ''}
                            exponente={characteristic.name == 'size' ? '2' : ''}
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    }
})