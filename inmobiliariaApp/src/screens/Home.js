import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CardList } from '../components/organisms/CardList';
import { properties } from '../utils/mocks/properties';

export const Home = () => (
    <SafeAreaView  style={style.list}>
        <CardList properties={properties} />
    </SafeAreaView >
)

const style = StyleSheet.create({
    list:{
        display: 'flex',
        flex: 1
    },  
})