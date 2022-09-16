export const getProductList = async offset => {
  const url = `https://staging-backend.esyms-api.com/esyms/website/product/front-condition?name=Goli&limit=10&page=${offset}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log('check json here', json);
      return json.results.docs;
    })
    .catch(err => {
      console.log('get product list err', err);
    });
};
