import React, {Component} from 'react';
import {Text,FlatList, View} from 'react-native';
import {ListItem,Badge,Button} from 'react-native-elements';
import style from './style';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const TaskList = ({DataTasks,onPressCallBack,onPressAllTaskCallBack,onPressToDoTaskCallBack,onPressDoneTaskCallBack}) => {

    const renderItem = ({item}) => (
        // <GestureRecognizer
        // onSwipeLeft={(state) => console.log("je swipe")
        // }
        // >
                <ListItem 
                bottomDivider 
                key={item.id}
                onPress={()=>onPressCallBack(item)}
                >

                    <Text>{item.task}</Text>

                        <Badge 
                        value= {item.statut}
                        status="success"
                        containerStyle={
                            style.badgeContainer
                        }
                        />

                </ListItem>


    );

    return(
        
        <FlatList
        data={DataTasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>Ayen</Text>}
        ListHeaderComponent= {
                                <View style={style.boutonHeader}>
                                    <Button
                                    title='Tout'
                                    buttonStyle={{
                                        backgroundColor:'orange',
                                    }}
                                    onPress={()=>onPressAllTaskCallBack()}

                                />
                                <Button
                                    title='En Cours'
                                    buttonStyle={{
                                        backgroundColor:'red',
                                    }}
                                    onPress={()=>onPressToDoTaskCallBack()}

                                />
                                <Button
                                title='Terminé'
                                buttonStyle={{
                                    backgroundColor:'blue'
                                }}
                                onPress={()=>onPressDoneTaskCallBack()}
                                />
                                </View>
        }
        />

    )

};

export default TaskList;