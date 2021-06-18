import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from '../atoms/Title'
import { Adress } from '../atoms/Address'


export const CardHeader = ({ address, title }) => {
    return (
         <View>
             <Title title={title} />
             <Adress address={address} />
         </View>
    )
};


const styles = StyleSheet.create({

})