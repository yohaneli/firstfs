import React, {Component} from 'react';
import {Text,FlatList} from 'react-native';
import {ListItem,Badge} from 'react-native-elements';
import style from './style';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const TaskList = ({DataTasks,onPressCallBack,}) => {

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
        />

    )

};

export default TaskList;