const fetchProduct = () => async(dispatch) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const responseData = await response.clone().json();
    dispatch({
        type : 'fetch-product',
        payload : responseData
    });
}

export { fetchProduct };
