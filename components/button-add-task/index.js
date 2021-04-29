import React from 'react';
import {Icon} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const ButtonAddTask = ({onPressAddTaskCallBack}) => {
    return (
    <ActionButton 
        buttonColor='blue'
        // icon={<Icon color={'white'} name={'add'} />}
        onPress={()=>onPressAddTaskCallBack()}
        onLongPress={()=>onLongPress()}

    />
    )
};

function onPress() {
    console.log('add');
}

function onLongPress() {
    console.log('add long press');
}

export default ButtonAddTask;