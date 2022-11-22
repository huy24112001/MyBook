import BookItem from "../components/BookItem";
import {Text} from "react-native";

function BookDetailScreen({route}){
    const bookid = route.params.BookId;
    return <Text> id cua sach la {bookid}</Text>
}
export default BookDetailScreen;
