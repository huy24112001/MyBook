import {Pressable,StyleSheet, Text, View} from "react-native";

function BookItem({onPress}){
    return <Pressable style={styles.pressed} onPress={onPress}><Text>huy</Text></Pressable>

}
export default BookItem;
const styles = StyleSheet.create({
    pressed:{
        backgroundColor: 'blue'
    }
})
