import React from 'react';
import { View, Text } from 'react-native';
import Star from '../../assets/images/Star.svg'

export const Ranking = ({ total= 0, iconProps = {width: 30, height:30} }) => {
    return (
       <View>
           <Star {...iconProps} />
           <Text>{total}</Text>
       </View>
    )
}