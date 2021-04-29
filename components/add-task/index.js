import React from 'react';
import Prompt from 'rn-prompt';
import { Text, View ,TouchableWithoutFeedback} from 'react-native';


const AddTask = ({promptVisible,onHidePromptCallback,onSubmitCallBack}) => {
    return (
        <Prompt
            title="Ajouter une nouvelle tâche"
            placeholder="Saisir une tâche"
            defaultValue="Delete DopeBoy"
            visible={ promptVisible }
            onCancel={ () => onHidePromptCallback()}
            onSubmit={ (value) =>  onSubmitCallBack(value)}
        />
    );
}

export default AddTask