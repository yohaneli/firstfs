import React from 'react';
import {Text,View,Modal,Pressable,Alert,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import style from './style';
import { Button } from 'react-native-elements';


const MenuTask = ({isVisible,onDisappearCallBack,content,onChangeStatusCallback,onDeleteCallback}) => (

    <View style={style.centeredView}>
        <Modal 
        visible={isVisible}
        animationType="slide"
        transparent={true}
        >
            <TouchableWithoutFeedback onPress={()=> onDisappearCallBack()}>
                <View style={style.centeredView}>
                    <TouchableWithoutFeedback>
                        <View style={style.modalView}>
                            <Text style={style.modalText}>{content}</Text>
                                <Button
                                    title='Fermer'
                                    buttonStyle={{
                                        backgroundColor:'orange',
                                    }}
                                    onPress={() => onDisappearCallBack() }
                                />
                                <Button
                                    title='Supprimer'
                                    buttonStyle={{
                                        backgroundColor:'red',
                                    }}
                                    onPress={() => onDeleteCallback() }
                                />
                                <Button
                                title='Changer statut'
                                buttonStyle={{
                                    backgroundColor:'blue'
                                }}
                                onPress={() => onChangeStatusCallback() }
                                />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    </View>
);

export default MenuTask;
