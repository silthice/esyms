const INITIAL_STATE = {
  bannerImg: {
    uri: require('../../assets/banner.png')
  },
  productList: []
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'APPEND_PRODUCT_LIST':
      return {
        ...state,
        productList: [...state.productList, ...action.payload]
      };
    default:
      return state;
  }
};

export default home;
