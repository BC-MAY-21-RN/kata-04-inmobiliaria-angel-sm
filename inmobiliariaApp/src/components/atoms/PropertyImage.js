import React from 'react';
import { Image } from 'react-native';

export const PropertyImage = ({ url= '' }) => {
    return (
        <Image
            style={{width: 30, height: 30}}
            source={{
                uri: url,
            }}
        />
    )
}