import {Button, FlatList, Pressable, Text, View} from "react-native";
import BookItem from "../components/BookItem";
import {useEffect, useState} from "react";

function ListBookScreen({navigation,route}){

    const [displayBook, setDisplayBook] = useState([])

        useEffect(() => {
            fetch('https://www.googleapis.com/books/v1/volumes?q=React+Native')
                .then((response) => response.json())
                .then((data) => {
                        setDisplayBook(data.items)
                         // console.log('hai')
                    }
                ).catch((error) => {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                }
            )
        }, [])

    function renderBookItem(itemData){

            const bookItemProp = {
                id: itemData.item.id,
                title: itemData.item.volumeInfo.title,
                author : itemData.item.volumeInfo.authors,
                imgUrl : itemData.item.volumeInfo.imageLinks.smallThumbnail,
            };

        // console.log(bookItemProp.imgUrl)
        function handlerBtn(){
            navigation.navigate("BookDetail",{BookId : bookItemProp.id})
        }
        return <BookItem onPress ={handlerBtn} bookItem ={bookItemProp}/>
    }

    return  <FlatList data={displayBook} keyExtractor={(item) => item.id} renderItem={renderBookItem}/>
}
export default ListBookScreen;
