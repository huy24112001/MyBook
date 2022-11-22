import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import { useEffect } from 'react';
import { BookDetail, BookListScreen } from './src';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();


  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=React+Native")
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res;
      })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
          console.log(result.items);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((err) => {
        console.log(err);
      })
  }, []);


  if (!isLoaded) {
    return <ActivityIndicator style={styles.loadingScreen} />
  } else {
    return (
      <View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  loadingScreen: {

  },
});

export default App;
