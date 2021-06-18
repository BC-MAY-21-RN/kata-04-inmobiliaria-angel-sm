import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Characteristic = ({total, icon = ''}) => {
    return (
       <View style={styles.content}>
            <Image
                style={{width: 20, height:20}}
                source={{
                    uri: icon
                }}
            />
           <Text>{total}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        width: '33%'
    }
})