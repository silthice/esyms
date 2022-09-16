import {StyleSheet, View, SafeAreaView, FlatList, Text, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Theme} from '../utils/theme';
import {getProductList} from '../services/api';
import allActions from '../redux/actions';
import ProductItem from '../components/ProductItem';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartIcon from '../components/cartIcon';

const screenHeight = Dimensions.get('screen').height;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [pageOffset, setPageOffset] = useState(1);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const bannerImg = useSelector(state => state.homeState.bannerImg);
  const productList = useSelector(state => state.homeState.productList);

  useEffect(() => {
    if (productList && productList.length < 1) {
      getData(pageOffset);
    }
  }, [productList]);

  function getData(offset) {
    setSpinnerVisible(true);

    getProductList(offset)
      .then(res => {
        if (res) {
          dispatch(allActions.homeActions.appendProductList(res));
        }
        setSpinnerVisible(false);
      })
      .catch(err => {
        console.log('getProductList error', err);
        setSpinnerVisible(false);
      });
  }

  function onLoadMore() {
    console.log('load more');
    setPageOffset(pageOffset + 1);
  }

  useEffect(() => {
    if (pageOffset !== 1) {
      getData(pageOffset);
    }
  }, [pageOffset]);

  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" style={styles.searchIconStyle} />
          <Text style={{marginLeft: 10, color: '#c5c5c5'}}>Start exploring</Text>
        </View>
        <View style={styles.cartIconContainer}>
          <View style={styles.cartItemCountContainer}>
            <Text style={styles.cartItemCount}>13</Text>
          </View>
          <CartIcon height={23} width={23} fill={Theme.COLOR_FFF} />
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <View style={styles.bannerContainer}>
        <Image source={bannerImg.uri} style={styles.bannerImageStyle} resizeMode={'cover'} />
      </View>
    );
  }

  function renderProductItems(item, index) {
    return (
      <View style={{marginBottom: index === productList.length - 1 ? screenHeight * 0.15 : 0}}>
        <ProductItem item={item}></ProductItem>
      </View>
    );
  }

  return (
    <View>
      <SafeAreaView style={styles.statusBarContainer} />
      <View style={styles.headerBackground}></View>

      <View style={styles.contentContainer}>
        <View>
          {renderHeader()}
          {renderBanner()}
        </View>
        <FlatList
          style={styles.flatList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 24}}
          data={productList}
          renderItem={({item, index}) => renderProductItems(item, index)}
          onEndReached={() => {
            onLoadMore();
          }}
          onEndReachedThreshold={0.2}
        />
      </View>
      <Spinner visible={spinnerVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarContainer: {
    flex: 0,
    backgroundColor: Theme.COLOR_6CC8BE
  },
  headerBackground: {
    height: 190,
    backgroundColor: Theme.COLOR_6CC8BE,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 16
  },
  searchContainer: {
    backgroundColor: Theme.COLOR_FFF,
    height: 40,
    width: 300,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 40
  },
  cartItemCountContainer: {
    backgroundColor: 'red',
    borderRadius: 16,
    height: 16,
    width: 16,
    position: 'absolute',
    top: 5,
    right: -5,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartItemCount: {
    color: Theme.COLOR_FFF,
    fontSize: 11,
    fontFamily: 'Inter-Bold'
  },
  cartIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 5,
    flex: 1
  },
  bannerImageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 8
  },
  bannerContainer: {
    margin: 16,
    marginBottom: 20,
    height: 165
  },
  contentContainer: {
    height: screenHeight,
    zIndex: 1
  },
  flatList: {
    paddingHorizontal: 16
  },
  searchIconStyle: {
    fontSize: 25,
    color: '#5a5a5a'
  }
});

export default HomeScreen;
