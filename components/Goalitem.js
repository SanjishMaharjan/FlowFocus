import { StyleSheet,View, Text, Pressable } from "react-native";
function GoalItem(props){
    return(
    <View style={styles.goalList}>
    <Pressable android_ripple={{color:"#f88e8e"}} onPress={props.onDeleteItem.bind(this, props.id)}>
       <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
    )
};
export default GoalItem;

const styles = StyleSheet.create({
    goalList:{
        borderWidth: 2,
        borderRadius:4,
        margin: 5,
        marginTop:17,
        borderColor: "#312b4b",
        backgroundColor: "#311b6b"
      },
      goalText :{
        padding: 8,
        color: "white",
      },
      HeroTitle: {
        fontSize:22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#ddc2ff"
      }
      
});