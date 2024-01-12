import { StyleSheet,View,TouchableOpacity, Text } from "react-native";
function MyButton(props){
    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={props.addButtonAction}>
          <Text style={styles.buttonText}>{props.actionName}</Text>
        </TouchableOpacity>
    </View>
    )
};
export default MyButton;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#ddc2ff',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: '#444444',
        fontSize: 16,
      },
});