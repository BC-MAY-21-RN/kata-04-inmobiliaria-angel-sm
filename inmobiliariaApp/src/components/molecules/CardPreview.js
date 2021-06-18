import React from 'react';
import { View } from 'react-native';
import { PropertyImage } from '../atoms/PropertyImage'
import { Ranking } from '../atoms/Ranking'

export const CardPreview = ({ url, total }) => {
    return (
         <View>
             <PropertyImage url={url} />
             <Ranking iconProps={{with:30, heigth:30}} total={total} />
         </View>
    )
};
