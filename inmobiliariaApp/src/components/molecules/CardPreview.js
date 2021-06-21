import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PropertyImage } from '../atoms/PropertyImage'
import { Ranking } from '../atoms/Ranking'
import { theme }  from '../../shared/theme';

export const CardPreview = ({ url, total }) => {
    return (
         <View style={styles.previewContent}>
            <PropertyImage url={url} />
            <View style={styles.rankingContent}>
                <Ranking total={total} />
            </View>
         </View>
    )
};

const styles = StyleSheet.create({
    rankingContent: {
        position: 'absolute',
        width: 60,
        padding: 5,
        bottom: 0,
        right: 30,
        marginBottom: 10,
        backgroundColor: theme.color.yellowLigth,
        borderRadius: 20,
    },
    previewContent: {
        position: 'relative',
    }
})