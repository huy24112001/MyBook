
import {
    Text,
    View,
    ActivityIndicator,
    StyleSheet,
    Linking,
    Alert,
    Image,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import { useEffect, useState, useCallback, useLayoutEffect, useContext } from "react";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/Entypo";
import { FavoritesContext } from "../contexts/FavoriteContext";
import { CurrentRenderContext } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";



function BookDetailScreen({ navigation, route }) {
    const [bookInfo, setBookInfo] = useState();
    const { width } = useWindowDimensions();
    const favoriteBooksCtx = useContext(FavoritesContext);
    const bookId = route.params.bookId;
    const bookIsFavorite = favoriteBooksCtx.ids.includes(bookId);

    function changeFavoriteStatusHandler() {
        if (bookIsFavorite)
            favoriteBooksCtx.removeFavorite(bookId);
        else
            favoriteBooksCtx.addFavorite(bookId);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Icon name={bookIsFavorite ? 'heart' : 'heart-outlined'} onPress={changeFavoriteStatusHandler}
                    size={25} color='white' />
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);



    useEffect(() => {
        fetch(route.params.selfLink)
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
                <Image style={styles.bookImage} source={{ uri: bookInfo.volumeInfo.imageLinks.smallThumbnail }} />
                <Text style={styles.bookName}>{bookInfo.volumeInfo.title}</Text>
                <Text>{bookInfo.volumeInfo.authors.map((author, index) => {
                    if (index == bookInfo.volumeInfo.authors.length - 1)
                        return (
                            <Text key={index}> {author}.</Text>
                        );
                    return (
                        <Text key={index}> {author},</Text>
                    )
                })}</Text>

                <View style={styles.btnContainer}>

                    <Button
                        name="Preview Book"
                        style={styles.buttons}
                        color="red"
                        onPress={() => {
                            // Linking.openURL(bookInfo.volumeInfo.previewLink);
                        }}

                    />
                    <Button
                        style={styles.buttons}
                        // color=""
                        onPress={() => {
                            Linking.openURL(bookInfo.accessInfo.webReaderLink);
                        }} name="Read Book" />
                    <Button
                        style={styles.buttons}
                        // color=""
                        onPress={() => {
                            Linking.openURL(bookInfo.volumeInfo.infoLink);
                        }}
                        name="Information Book" />

                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.eachInfo}>
                        <Text style={styles.infLabel}>Publisher</Text>
                        <Text style={styles.infBook}>{bookInfo.volumeInfo.publisher}</Text>
                    </View>
                    <View style={styles.eachInfo}>
                        <Text style={styles.infLabel}>Publish Date</Text>
                        <Text style={styles.infBook}>   {bookInfo.volumeInfo.publishedDate}</Text>
                    </View>
                    <View style={styles.eachInfo}>
                        <Text style={styles.infLabel}>Page Count</Text>
                        <Text style={styles.infBook}>      {bookInfo.volumeInfo.pageCount}</Text>
                    </View>

                    <View style={styles.eachInfo}>
                        <Text style={styles.infLabel}>Language</Text>
                        <Text style={styles.infBook}>     {bookInfo.volumeInfo.language}</Text>
                    </View>
                </View>
                <View style={styles.desBook}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, }}>Description</Text>
                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                        <RenderHtml contentWidth={width} source={{ html: bookInfo.volumeInfo.description }} />
                    </View>
                </View>


            </View>

        </ScrollView>
    );
}
export default BookDetailScreen;
const styles = StyleSheet.create({
    detailContainer: {
        alignItems: 'center',

    },
    bookImage: {
        marginTop: 10,
        width: '40%',
        height: 270,
        borderRadius: 7,
    },
    bookName: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 25,
    },

    btnContainer: {
        borderBottomColor: "#1a1817",
        borderBottomWidth: 2,
        padding: 15,
        flexDirection: 'row',
    },
    buttons: {

    },
    infoContainer: {
        flexDirection: 'row',
        marginTop: 15,

    },
    eachInfo: {
        width: '23 %',
        marginLeft: 1,
        marginRight: 1,
    },
    infLabel: {
        fontWeight: 'bold'
    },
    infBook: {

    },
    desBook: {
        marginTop: 15,
        width: '100%',
        marginLeft: '3%',
    },
})
