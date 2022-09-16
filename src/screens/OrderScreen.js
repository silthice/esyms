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

const screenHeight = Dimensions.get('window').height;

const OrderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text>OrderScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E23'
  }
});

export default OrderScreen;
