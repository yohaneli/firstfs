import React from 'react';
import lodash from 'lodash';
import { Text, View , ScrollView } from 'react-native';
import Header from './components/header';
import { Button } from 'react-native-elements';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import AddTask from './components/add-task';
import TASK from './components/model';

export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = 
    {
      myText:"Un texte par défaut",
      nbClick:0,
      list:[],
      isModalVisible:false,
      currentTask:{},
      promptVisible:false,
      idGenerator:0
    }

  }

  onPressButton = () => {

    this.setState({ myText:'Salut les filles ! '});

    this.setState({ nbClick:this.state.nbClick+1});

  }

  componentDidMount(){

    console.log('Je suis dans le Did Mount');

  }

  componentDidUpdate(){

    console.log('Je suis dans le Did Update');

  }

  displayMenuTask = (item) => {

    console.log('je suis dans le callback')

    console.log(item)

    this.setState({ isModalVisible:true,currentTask:item});

  }

  deleteCurrentTask = () => {

    console.log(this.state.currentTask);

    const newDataTaskList = this.state.list.filter(Element=>Element.id!=this.state.currentTask.id)

    console.log(newDataTaskList)

    this.setState({list:newDataTaskList,isModalVisible:false,currentTask:{}});

  };

  changeStatusCurrentTask = () => {

    // if le statut actuel = done Statut alors il passe alors il passe a todoStatus

    const updatedStatus = (this.state.currentTask.statut === TASK.doneStatus) ? TASK.todoStatus : TASK.doneStatus;

    // console.log(updatedStatus);

    const updatedTask = this.state.currentTask;

    updatedTask.statut = updatedStatus;

    // recuperer l'index

    const index = lodash.findIndex(this.state.list, {

      id: this.state.currentTask.id

    });

    console.log(index);

    const updatedTaskList = this.state.list;

    updatedTaskList[index] = updatedTask;

    this.setState({list:updatedTaskList,isModalVisible:false});

  }

  hideModal = () => {

    this.setState({ isModalVisible:false});

  }

  togglePrompt = () => {

    console.log('toggle');

    this.setState({promptVisible:!this.state.promptVisible});
    
  }

  addNewTask = (value) => {

    //console.log(value)

    const tache = {
      id: this.state.idGenerator,
      task: value,
      statut: TASK.todoStatus
    }

    //console.log(tache)

    this.setState({ list: [...this.state.list,tache],idGenerator:this.state.idGenerator+1,promptVisible:!this.state.promptVisible})

  }

  filterAllTask = () => {

    console.log('all')

    this.state.list

    console.log(this.state.list)

  }

  filterToDoTask = () => {
    console.log('todo')

    console.log(this.state.currentTask);

    const newDataTaskList = this.state.list.filter(Element=>Element.statut===TASK.todoStatus)

    console.log(newDataTaskList)

    this.setState({list:newDataTaskList,isModalVisible:false,currentTask:{}});

  }

  filterDoneTask = () => {

    console.log('done')

    console.log(this.state.currentTask);

    const newDataTaskList = this.state.list.filter(Element=>Element.statut===TASK.doneStatus)

    console.log(newDataTaskList)

    this.setState({list:newDataTaskList,isModalVisible:false,currentTask:{}});
  }

  render() {

      return (

        <View style={{flex:1}}>

            <Header content="Liste des tâches"/>

            <Button

            title={this.state.myText}

            onPress={this.onPressButton}

            />

            {/* <Text>Nombre de clics : {this.state.nbClick}</Text> */}
            <ScrollView>

              
                <TaskList 

                onPressCallBack={this.displayMenuTask} 

                DataTasks={this.state.list}

                onPressAllTaskCallBack={this.filterAllTask}

                onPressToDoTaskCallBack={this.filterToDoTask}

                onPressDoneTaskCallBack={this.filterDoneTask}

                />

              </ScrollView>


            <MenuTask 

            content={this.state.currentTask.task} 

            isVisible={this.state.isModalVisible} 

            onDisappearCallBack={this.hideModal
            }
            onDeleteCallback={this.deleteCurrentTask} 

            onChangeStatusCallback={this.changeStatusCurrentTask} 

            />

              
            <ButtonAddTask 
            onPressAddTaskCallBack={this.togglePrompt} 
            />

            <AddTask 
            promptVisible={this.state.promptVisible} 
            onHidePromptCallback={this.togglePrompt} 
            onSubmitCallBack={this.addNewTask}/>

        </View>
        
      );

  }

}

