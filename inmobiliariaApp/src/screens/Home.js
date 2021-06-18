import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { CardList } from '../components/organisms/CardList';
import { properties } from '../utils/mocks/properties';

export const Home = () => (
    <SafeAreaView  style={{flex: 1}}>
        <CardList properties={properties} />
    </SafeAreaView >
)
