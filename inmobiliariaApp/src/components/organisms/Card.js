import React from 'react';
import { View } from 'react-native';
import { CardPreview } from '../molecules/CardPreview';
import { CardHeader } from '../molecules/CardHeader';
import { CardBody } from '../molecules/CardBody';
import { CardFooter } from '../molecules/CardFooter';

export const Card = (props) => {
    const { image, ranking, address, name, characteristics, price, id } = props.item
    return (
        <View style={{flex: 1,  backgroundColor: "pink", margin: 2}}>
            <View>
                <CardPreview total={ranking} url={image} />
            </View>
            <View>
                <CardHeader address={address} title={name} />
                <CardBody characteristics={characteristics} />
                <CardFooter price={price} />
            </View>
        </View>
    )
}