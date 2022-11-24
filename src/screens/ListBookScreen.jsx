import {Button, FlatList, Pressable, Text, TextInput,StyleSheet, View} from "react-native";
import BookItem from "../components/BookItem";
import {useEffect, useLayoutEffect, useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export  function  useListBook() {
    const [displayBook, setDisplayBook] = useState([])

    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=React+Native')
            .then((response) => response.json())
            .then((data) => {
                    setDisplayBook(data.items)
                }
            ).catch((error) => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            }
        )
    }, [])

    return {
        displayBook
    }
}



function ListBookScreen({ navigation, route }) {

    const [search, setSearch] = useState('');
    const {displayBook} = useListBook()
    const [displayBook1,setDisplayBook1] = useState()

    useLayoutEffect(()=> {
            setDisplayBook1(displayBook)
        }
    ,[displayBook])



    function searchFilter(text){
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = displayBook.filter(
                function (item) {
                    const itemData = item.volumeInfo.title
                        ? item.volumeInfo.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setDisplayBook1(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setDisplayBook1(displayBook);
            setSearch(text);
        }
    };

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

    return <View>
        <View style={{flexDirection:'row'}}>
        <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilter(text)}
            value={search}
            placeholder="Search Here" ></TextInput>
        <Icon name='search' size ={30} style={{marginTop:7 }}></Icon>
        </View>

         <FlatList
             contentContainerStyle={{paddingBottom:60}}
             style={styles.main} data={displayBook1} keyExtractor={(item) => item.id} renderItem={renderBookItem} />
    </View>
}
export default ListBookScreen;
const styles = StyleSheet.create({
    textInputStyle: {
        width:'90%',
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#0d0e0e',
        backgroundColor: '#fdfcfc',
        borderRadius:5,
    },
    main:{

    }
})
