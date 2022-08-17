import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator,Dimensions } from 'react-native';
import { COLOR, FAMILY, SIZE } from '@theme/typography'
var height = Dimensions.get("window").height; //full height

export default function Loader(props){
    return (
        (props.show ? <View style={styles.container}>
            <ActivityIndicator size="large" color="#ffff00"/>
        </View>: null)
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLOR.violet,
        zIndex: 1000,
        opacity: 0.9,
        height:height
       
    }
  });
  