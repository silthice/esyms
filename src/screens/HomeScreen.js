import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Theme} from '../utils/theme';
import {getProductList} from '../services/api';

const screenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [pageOffset, setPageOffset] = useState(1);
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  useEffect(() => {
    // if (productList && productList.length < 1) {
    getData(pageOffset);
    // }
  }, []);

  function getData(offset) {
    console.log('getData', offset);

    setSpinnerVisible(true);

    getProductList(offset)
      .then(res => {
        if (res) {
          // console.log('res here', res)

          res.forEach(element => {
            console.log('each element', element.name.en);
            console.log('each element', element.img[0].src);
            console.log('each element', element.price);
            console.log('each element', element.specialPrice);
          });
          // dispatch(allActions.catalogActions.appendAiringList(res));
        }
        setSpinnerVisible(false);
      })
      .catch(err => {
        console.log('getProductList error', err);
        setSpinnerVisible(false);
      });
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: Theme.COLOR_6CC8BE}}></View>
      <View style={{flex: 3}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;
