import {StyleSheet, Dimensions} from 'react-native';
import {Theme} from './theme';

export const globalStyles = StyleSheet.create({
  tabBarFont: {
    fontSize: 11,
    fontFamily: 'Inter-SemiBold'
  },
  headerBackground: {
    backgroundColor: Theme.COLOR_6CC8BE
  },
  productNameLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Bold'
  },
  price: {
    fontSize: 11,
    fontFamily: 'Inter-Medium',
    color: Theme.COLOR_8F8F8F
  },
  specialPrice: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: Theme.COLOR_33A197
  }
});
