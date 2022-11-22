import BookItem from "../components/BookItem";
import { Button, Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { useEffect, useState } from "react";


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

                <Text>Tên sách: {bookInfo.volumeInfo.title}</Text>
                <Text>Phụ đề: {bookInfo.volumeInfo.title}</Text>
                <Text>Tác giả:{bookInfo.volumeInfo.authors.map((author) => {
                    return (
                        <Text> {author}</Text>
                    )
                })}</Text>
                <Text>Nhà xuất bản: {bookInfo.volumeInfo.publisher}</Text>
                <Text>Ngay xuat ban: {bookInfo.volumeInfo.publishedDate}</Text>

                <Text></Text>
            </View>
            <Button
                onPress={() => {
                    console.log(bookInfo.volumeInfo.title);
                }}
                title={"log"}
            />
        </View>
    );
}
export default BookDetailScreen;
const styles = StyleSheet.create({

})