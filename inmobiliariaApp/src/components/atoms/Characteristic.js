import React from 'react';
import { View, Text, Image } from 'react-native';

export const Characteristic = ({total, icon = ''}) => {
    return (
       <View>
            <Image
                style={{width: 100, height:100}}
                source={{
                    uri: icon
                }}
            />
           <Text>{total}</Text>
       </View>
    )
}