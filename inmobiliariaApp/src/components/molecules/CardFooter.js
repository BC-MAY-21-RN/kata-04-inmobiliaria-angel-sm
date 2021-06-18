import React from 'react';
import { View } from 'react-native';
import { Price } from '../atoms/Price'
import { Favorite } from '../atoms/Favorite'

export const CardFooter = ({ price }) => {
    return (
         <View>
             <Price price={price} />
             <Favorite with={30} heigth={30} />
         </View>
    )
};
