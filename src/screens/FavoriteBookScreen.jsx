import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useContext, useLayoutEffect} from 'react';


import { FavoritesContext } from '../contexts/FavoriteContext';
import Icon from "react-native-vector-icons/Entypo";
import {useListBook} from "./ListBookScreen";
import BookItem from "../components/BookItem";

function FavoritesScreen({navigation}) {

    const favoriteBooksCtx = useContext(FavoritesContext);
    const {displayBook} = useListBook();
    const favoriteBooks = displayBook.filter((book) => favoriteBooksCtx.ids.includes(book.id))


    function renderBookItem(itemData) {

        const bookItemProp = {
            id: itemData.item.id,
            selfLink: itemData.item.selfLink,
            title: itemData.item.volumeInfo.title,
            author: itemData.item.volumeInfo.authors,
            imgUrl: itemData.item.volumeInfo.imageLinks.smallThumbnail,
        };

        function handlerBtn() {
            navigation.navigate("BookDetail", { selfLink : bookItemProp.selfLink ,bookId : bookItemProp.id    })

        }
        return <BookItem onPress={handlerBtn} key={bookItemProp.id} bookItem={bookItemProp} />
    }

   if (favoriteBooks.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite books yet.</Text>
            </View>
        );
    }
   else
    return   <FlatList contentContainerStyle={{paddingBottom:60}}
        style={styles.main} data={favoriteBooks} keyExtractor={(item) => item.id} renderItem={renderBookItem} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
});
