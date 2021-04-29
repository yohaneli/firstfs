import React from 'react';
import lodash from 'lodash';
import { Text, View , ScrollView } from 'react-native';
import Header from './components/header';
import { Button } from 'react-native-elements';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const list = [
  {
    id:0,
    task: 'Dormir',
    statut : "En cours"
  },
  {
    id:1,
    task: 'Se réveiller',
    statut : "En cours"
  },
  {
    id:2,
    task: 'Se lever',
    statut : "En cours"
  },
  {
    id:3,
    task: 'Manger',
    statut : "En cours"
  },
  {
    id:4,
    task: 'Se brosser les dents',
    statut : "En cours"
  },
  {
    id:5,
    task: 'Se doucher',
    statut : "En cours"
  },
  {
    id:6,
    task: 'Repasser',
    statut : "En cours"
  },{
    id:7,
    task: 'Se préparer',
    statut : "En cours"
  },{
    id:8,
    task: 'Marcher',
    statut : "En cours"
  },
  {
    id:9,
    task: 'Arriver',
    statut : "En cours"
  },
];


export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = 
    {
      myText:"Un texte par défaut",
      nbClick:0,
      list:list,
      isModalVisible:false,
      currentTask:{}
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
    console.log("changer statut");
  }

  hideModal = () => {

    this.setState({ isModalVisible:false});

  }

  onSwipeLeft(gestureState) {
    console.log("je swipe")
  }

  render() {

      return (

        <View style={{flex:1}}>

            <Header content="Liste des tâches"/>

            <Button
            title={this.state.myText}
            onPress={this.onPressButton}
            />

            <Text>Nombre de clics : {this.state.nbClick}</Text>

            <MenuTask 
            content={this.state.currentTask.task} 
            isVisible={this.state.isModalVisible} 
            onDisappearCallBack={this.hideModal}
            onDeleteCallback={this.deleteCurrentTask} 
            onChangeStatusCallback={this.changeStatusCurrentTask} 
            />

              <ScrollView>

                <TaskList 
                onPressCallBack={this.displayMenuTask} 
                DataTasks={this.state.list}
                />

              </ScrollView>

            <ButtonAddTask />

        </View>
        
      );

  }

}

