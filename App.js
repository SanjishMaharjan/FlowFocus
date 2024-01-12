import {Text, View,StyleSheet,Button, FlatList} from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import GoalItem from "./components/Goalitem";
import GoalInput from "./components/Goalinput";
import MyButton from "./components/MyButton";
import { StatusBar } from "expo-status-bar";

export default function App(){
  
  const [courseGoals,setCourseGoals]= useState([]);
  const [modalIsVisible,setModalIsVisible]= useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  };
  function endAddGoalHandler(){
    setModalIsVisible(false);
  };

  function addInputHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals,{
      text: enteredGoalText, id: Math.random().toString()
    }])
    setModalIsVisible(false);
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

return(
  <View style={styles.appContainer}>
    <Button title="Add New Goal" color={"#311b6b"}  onPress={startAddGoalHandler}/>
    {/* {modalIsVisible &&<Text style={styles.HeroTitle}>OrganizeHub</Text>} */}
      {modalIsVisible && <GoalInput visible = {modalIsVisible} 
      onCancel = {endAddGoalHandler}
      onAddGoal={addInputHandler}/>}
      {/* <Icon name="check-circle" size={30} color="#00cc00" /> */}
      {/* {modalIsVisible && <Text style={styles.taskTitle}>Checkpoints</Text>} */}
  <FlatList data={courseGoals} renderItem={(itemData)=>{
    return(
      <GoalItem text={itemData.item.text}
      id = {itemData.item.id}
      onDeleteItem={deleteGoalHandler}/>
      )}} >   
  </FlatList>
 </View>
  )
}

const styles= StyleSheet.create({
  HeroTitle: {
    marginBottom: 30,
    paddingTop: 10,
    fontSize:22,
    fontWeight: 'bold',
  textAlign: 'center',
  color: "#ddc2ff"

},
taskTitle: {
  marginBottom: 10,
  paddingTop: 10,
  fontSize:22,
  fontWeight: 'bold',
  textAlign: 'center',
  color: "#ddc2ff"

},
appContainer: {
  margin: 12,
  paddingTop: 50,
  padding:15,
},

listBox:{
  borderRadius:2,
  marginTop: 20,
  padding: 8,
},

})


// ________________________________learning________________________________________________ 
// import { StyleSheet, Text, View, Button} from 'react-native';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{margin : 2,borderColor:"red", borderWidth:2,padding: 12}}>Welcome Niggas</Text> {/* Inline Styling not favourable */}
//       <Text style= {styles.textbox}>Open Camera to see magic bois</Text>
//     <Button title='Open Camera'/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//       justifyContent: 'center',
//   },
//   textbox : {
//     margin:12,
//     padding: 14,
//     borderColor: "red",
//     borderWidth:2,
//     borderRadius: 2 ,
//   }
// });

// ________________________________ To Do App _______________________________________