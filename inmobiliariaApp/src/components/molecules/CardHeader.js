import React from 'react';
import { View } from 'react-native';
import { Title } from '../atoms/Title'
import { Adress } from '../atoms/Address'

export const CardHeader = ({ address, title }) => {
    return (
         <View>
             <Title title={title} />
             <Adress iconProps={{with:30, heigth:30}} address={address} />
         </View>
    )
};
