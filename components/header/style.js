import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const style = StyleSheet.create ({
    subHeader: {
        backgroundColor: 'blue',
        height:40
    },
    header:{
        backgroundColor: 'blue',
        height: 200,
        justifyContent:'center',
        alignItems:'center'
    },
    textTitle: {
        color: 'white',
        fontSize:40,
        fontWeight:'bold'
    }
});

export default style;