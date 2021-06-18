import React from 'react';
import { View } from 'react-native';
import { Characteristic  } from '../atoms/Characteristic'

export const CardBody = ({ characteristics = [] }) => {
    return (
         <View>
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
