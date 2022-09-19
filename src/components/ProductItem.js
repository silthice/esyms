import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {globalStyles} from '../utils/globalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Theme} from '../utils/theme';

const ProductItem = props => {
  const productNameEN = props.item.name.en;
  const productRating = props.item.rating ? props.item.rating : 0;
  const productImgSrc = 'https://cdn.esyms.com/' + props.item.img[0].src;
  const productPrice = parseFloat(props.item.price).toFixed(2);
  const productSpecialPrice = parseFloat(props.item.specialPrice).toFixed(2);

  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{uri: productImgSrc}}></Image>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.productNameContainer}>
          <Text numberOfLines={2} style={globalStyles.productNameLabel}>
            {productNameEN}
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={globalStyles.price}>MYR {productPrice}</Text>
          <View style={{marginHorizontal: 3}}></View>
          <Text style={globalStyles.specialPrice}>MYR {productSpecialPrice}</Text>
        </View>

        <View style={globalStyles.flexDirectionRow}>
          <Ionicons name="star" style={styles.starIcon} />
          <View style={{marginHorizontal: 3}}></View>
          <Text style={[globalStyles.price, {color: '#000', textDecorationLine: 'none'}]}>
            {productRating}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    height: 264,
    width: 164,
    borderRadius: 8
  },
  imageContainer: {
    height: 164,
    width: 164,
    borderRadius: 8
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  detailsContainer: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flex: 1
  },
  productNameContainer: {
    height: 45,
    paddingTop: 5
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  starIcon: {
    fontSize: 14,
    color: Theme.COLOR_FFD90B
  }
});

export default ProductItem;
