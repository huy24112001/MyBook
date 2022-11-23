import BookItem from "../components/BookItem";
import { Button, Text, View, ActivityIndicator, StyleSheet, Linking, Alert, } from "react-native";
import { useEffect, useState, useCallback } from "react";
import { WebView } from "react-native-webview";
// import { WebView } from 'react-native';



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
        <View>
            <View>

                <Text>Title: {bookInfo.volumeInfo.title}</Text>
                <Text>Subtitle: {bookInfo.volumeInfo.title}</Text>
                <Text>Authors:{bookInfo.volumeInfo.authors.map((author) => {
                    return (
                        <Text> {author}</Text>
                    )
                })}</Text>
                <Text>Publisher: {bookInfo.volumeInfo.publisher}</Text>
                <Text>Published Date: {bookInfo.volumeInfo.publishedDate}</Text>
                <Text>Page Count: {bookInfo.volumeInfo.pageCount}</Text>
                {/* <Text>Categories:{"\n"}{bookInfo.volumeInfo.categories.map((categorie) => {
                    return (
                        <Text>{categorie}{"\n"}</Text>
                    );
                })}</Text> */}
                <Text>Content version: {bookInfo.volumeInfo.contentVersion}</Text>
                <Text>Language: {bookInfo.volumeInfo.language}</Text>
                <Button
                    onPress={() => {
                        Linking.openURL(bookInfo.volumeInfo.previewLink);
                    }}
                    title="Preview link"
                />
                <Button
                    onPress={() => {
                        Linking.openURL(bookInfo.volumeInfo.infoLink);
                    }}
                    title="Infomation link"
                />
                <Button
                    onPress={() => {
                        Linking.openURL(bookInfo.volumeInfo.canonicalVolumeLink);
                    }}
                    title="Canonucal volume link"
                />
            </View>
            <View>
                <Text>Imfomation for sale</Text>
                <Text>Country: {bookInfo.saleInfo.country}</Text>
                <Text>Saleability: {bookInfo.saleInfo.saleability}</Text>
                <Text>isEbook: {bookInfo.saleInfo.isEbook ? "true" : "false"}</Text>
            </View>
            <View>
                <Text>Access Infomation:</Text>
                <Text>Country: {bookInfo.accessInfo.country}</Text>
                <Button
                    onPress={() => {
                        Linking.openURL(bookInfo.accessInfo.webReaderLink);
                    }}
                    title="Web reader link"
                />
            </View>
            <Button
                onPress={() => {
                    console.log(props.route.params);
                }}
                title={"log"}
            />
        </View>
    );
}
export default BookDetailScreen;
const styles = StyleSheet.create({

})