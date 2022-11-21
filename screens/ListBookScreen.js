import {Button, FlatList, Pressable, Text, View} from "react-native";
import BookItem from "../components/BookItem";

function ListBookScreen({navigation,route}){

    const displayBook =  [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

function renderBookItem(){

    function handlerBtn(){
        navigation.navigate("BookDetail")
    }
    return <BookItem onPress ={handlerBtn}/>
}

    return <FlatList data={displayBook}  renderItem={renderBookItem} />
}
export default ListBookScreen;
