const appendProductList = newProductList => {
  return {
    type: 'APPEND_PRODUCT_LIST',
    payload: newProductList
  };
};

export default {
  appendProductList
};
