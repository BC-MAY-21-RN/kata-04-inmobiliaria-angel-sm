import React from 'react';
import { View, Text } from 'react-native';
import Location from '../../assets/images/Location.svg'

export const Adress = ({ address, iconProps }) => {
    return (
       <View>
           <Location {...iconProps} />
           <Text>{address}</Text>
       </View>
    )
}