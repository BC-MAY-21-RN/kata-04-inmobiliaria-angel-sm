import React from 'react';
import { FlatList } from 'react-native';
import { Card } from './Card';

export const CardList = ({ properties }) => {
    return (
        <FlatList 
            data={properties}
            renderItem={Card}
            keyExtractor={item => item.id}
        />
    );
}
