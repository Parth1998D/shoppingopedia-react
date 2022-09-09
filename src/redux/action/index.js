

// For Add to cart
const addToCart = (product) => {
    const data = {
        type : 'ADD_TO_CART',
        payload: product
    }
    return data;
}

// For delete Item from cart
const removeFromCart = (product) => {
    const data = {
        type : 'REMOVE_FROM_CART',
        payload: product
    }
    return data;
}

export {
    addToCart,
    removeFromCart
}