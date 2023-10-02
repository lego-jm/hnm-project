function getProducts(query) {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/lego-jm/hnm-project/products/?q=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    } catch (e) {
      throw Error(`에러가 발생했습니다.${e.message}`);
    }
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/lego-jm/hnm-project/products/${id}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      dispatch({ type: "GET_PRODUCT_ITEM", payload: { data } });
    } catch (e) {
      throw Error(`에러가 발생했습니다.${e.message}`);
    }
  };
}

export const productAction = { getProducts };
export const productDetail = { getProductDetail };
