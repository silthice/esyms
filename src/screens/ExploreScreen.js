import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Theme} from '../utils/theme';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontFamily: 'Inter-Bold', color: Theme.COLOR_FFF}}>
        Upcoming Soon !
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLOR_6CC8BE,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ExploreScreen;
