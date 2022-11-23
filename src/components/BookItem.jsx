import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";


function BookItem({ onPress, bookItem }) {


    return (
        <View style={styles.container}>
            <Pressable style={styles.pressed} onPress={onPress}>
                <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{ uri: bookItem.imgUrl }} />
                    <View style={styles.titleAndButton}>
                        <View style={styles.title}>
                            <Text style={styles.bookName} >{bookItem.title} </Text>
                            <View style={styles.bookAuthor}>
                                <Text>by
                                    {bookItem.author.map((author, index) => {
                                        if (index === bookItem.author.length - 1)
                                            return <Text key={index}> {author}.</Text>
                                        else
                                            return <Text key={index}> {author},</Text>
                                    })}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.removeButton}>
                            <Button
                                title="Remove"
                                color="#800000"
                                disabled={true}
                            />
                        </View>
                    </View>
                </View>
            </Pressable >
        </View >
    );

}
export default BookItem;
const styles = StyleSheet.create({
    container: {

    },
    pressed: {

    },
    itemContainer: {

        flexDirection: 'row',
        flex: 1,
        height: 100,
        marginTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,

    },
    image: {
        width: '15%',
        height: '100%',
        borderRadius: 3,
    },
    titleAndButton: {
        marginLeft: 12,
    },

    title: {

    },
    bookName: {
        fontWeight: "bold",
        fontSize: 16,
    },
    bookAuthor: {
    },
    removeButton: {
        marginTop: 10,
        width: 100,
    }
})
