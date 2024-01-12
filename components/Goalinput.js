import { StyleSheet,Text, View, TextInput,Modal,Image } from "react-native";
import { useState } from "react";
import MyButton from "./MyButton";
function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText]= useState("");
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };
    function addInputHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }
    return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.innerContainer} >
            <Image style={styles.image} source={require("../assets/images/goal.png")}/>
        <TextInput style={styles.inputTextbox} onChangeText={goalInputHandler} placeholder="Add your Goals"
        value={enteredGoalText}/>

    <View style={styles.buttonContainer}>
        <MyButton addButtonAction={props.onCancel} actionName={"Cancel"}/>
        <MyButton addButtonAction={addInputHandler} actionName={"Add Task"}/>
    </View>
      </View>
    </Modal>
    )
}; 
export default GoalInput;

const styles = StyleSheet.create({
    innerContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomColor: "grey",
        // borderBottomWidth:2,
        backgroundColor : "#311b6b"
      },
      image:{
        width:100,
        height:100,
        margin:20,
      },
      inputTextbox:{
        marginRight: 10,
        width:"85%",
        padding: 16,
        borderRadius:4,
        color: "grey",
        borderWidth: 2,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        padding: 10,
      },
      buttonContainer:{
        flexDirection : "row",
        marginTop: 16,
        gap:40,
      }
     
});