
import {Text, View, ActivityIndicator, StyleSheet, Linking, Alert, Image, ScrollView,} from "react-native";
import { useEffect, useState, useCallback } from "react";
import Button from "../components/Button";





function BookDetailScreen(props) {
    const [bookInfo, setBookInfo] = useState();



    useEffect(() => {
        fetch(props.route.params)
            .then(res => res.json())
            .then(
                (result) => {
                    setBookInfo(result);
                },
                (error) => {
                    console.log(error);
                }
            )
            .catch((err) => {
                console.log(err);
            })
    }, []);
    if (!bookInfo)
        return <ActivityIndicator />
    return (
        <ScrollView>
            <View style={styles.detailContainer}>

                <Image style={styles.image} source={{ uri: bookInfo.volumeInfo.imageLinks.smallThumbnail }} />
                <Text style={styles.subTitle}>{bookInfo.volumeInfo.title}</Text>
                <Text>Authors:{bookInfo.volumeInfo.authors.map((author,index) => {
                    return (
                        <Text key={index}> {author}</Text>
                    )
                })}</Text>

                <View style={styles.btnContainer}>

                    <Button onPress={() => {
                        Linking.openURL(bookInfo.volumeInfo.previewLink);
                    }}
                    name="Preview Book" />
                    <Button onPress={() => {
                        Linking.openURL(bookInfo.accessInfo.webReaderLink);
                    }} name="Read Book" />
                    <Button onPress={() => {
                            Linking.openURL(bookInfo.volumeInfo.infoLink);
                        }}
                        name="Information Book" />

                </View>
            <View style={styles.bodyContainer}>
                <View>
                  <Text style={styles.infLabel}>Publisher</Text>
                   <Text style={styles.infBook}>{bookInfo.volumeInfo.publisher}</Text>
                </View>
                <View>
                    <Text style={styles.infLabel}>Published Date</Text>
                    <Text style={styles.infBook}>   {bookInfo.volumeInfo.publishedDate}</Text>
                </View>
                <View>
                    <Text style={styles.infLabel}>Page Count</Text>
                    <Text style={styles.infBook}>      {bookInfo.volumeInfo.pageCount}</Text>
                </View>

                <View>
                    <Text style={styles.infLabel}>Language</Text>
                    <Text style={styles.infBook}>     {bookInfo.volumeInfo.language}</Text>
                </View>
            </View>
                <View style={styles.desBook}>
                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize: 17,}}>Description</Text>
                    <Text>{bookInfo.volumeInfo.description}</Text>
                </View>

            </View>

        </ScrollView>
    );
}
export default BookDetailScreen;
const styles = StyleSheet.create({
    detailContainer:{
        alignItems:'center',

    },
    image: {
        marginTop:10,
        width: '40%',
        height: 270,
        borderRadius: 3,
    },
    subTitle:{
        marginTop:5,
        fontWeight:'bold',
    },

    btnContainer:{
        borderBottomColor : "#1a1817",
        borderBottomWidth :2,
        marginTop:30,
        padding :15,
        marginHorizontal: 12,
        marginVertical: 4,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    bodyContainer:{
        flexDirection:'row',
        marginTop:15,

    },
    infBook:{
        fontWeight:'bold',
        width:90,
        marginTop:2,
    },
    infLabel:{
        marginRight:25
    },
    desBook:{
        marginLeft:15,
        marginTop:10,
    }


})
