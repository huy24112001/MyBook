import React from "react";
import { Text, View } from "react-native";


const BookListScreen = () => {
    return (
        return <FlatList data={displayBook} keyExtractor={(item) => item.id} renderItem={renderBookItem} />
    );
}

export default BookListScreen;