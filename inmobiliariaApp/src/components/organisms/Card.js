import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardPreview } from '../molecules/CardPreview';
import { CardHeader } from '../molecules/CardHeader';
import { CardBody } from '../molecules/CardBody';
import { CardFooter } from '../molecules/CardFooter';
import { theme } from '../../shared/theme';

export const Card = (props) => {
    const { image, ranking, address, name, characteristics, price, id } = props.item
    return (
        <View style={style.card}>
            <View style={style.content}>
                <View style={style.imageContent}>
                    <CardPreview total={ranking} url={image} />
                </View>
                <View style={style.infoContent}>
                    <View style={style.info}>
                        <CardHeader address={address} title={name} />
                        <CardBody characteristics={characteristics} />
                        <CardFooter price={price} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    card:{
        display: 'flex',
        flex: 1,
        backgroundColor: theme.color.blueLigth,
        margin: 10,
        padding: 15,
        borderRadius: 15
    },  
    content: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    imageContent:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
    },  
    infoContent: {
        width: '65%',
    },
    info: {
        paddingHorizontal: 12,
    }
})