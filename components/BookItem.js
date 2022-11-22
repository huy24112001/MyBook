import {Image, Pressable, StyleSheet, Text, View} from "react-native";


function BookItem({onPress,bookItem,}){


    return <View style={styles.main}>
    <Pressable style={styles.pressed} onPress={onPress}>
        <View style={styles.itemContainer}>
        <Image style={styles.image} source={{uri: bookItem.imgUrl }}/>
        <Text>{bookItem.title} </Text>
        <Text>by {bookItem.author[0]}</Text>
           </View>
    </Pressable>
    </View>

}
export default BookItem;
const styles = StyleSheet.create({
    main:{

    },
    pressed: {

    },
    itemContainer: {
        flexDirection:'row',
        flex:1,
        height:100,
        marginBottom: 20,
    },
    image: {
        width: '15%',
        height: '100%',
    },
})
