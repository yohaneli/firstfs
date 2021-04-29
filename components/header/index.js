import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

const Header =  (props) => {

    const {content}=props;

    return (

        <View>

            <View style={style.subHeader}/>

                <View style={style.header}>

                    <Text style={style.textTitle}>{content}</Text>

                </View>

        </View>
        
    );

}

export default Header;