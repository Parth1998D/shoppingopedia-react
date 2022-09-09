
const intialState = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
const handleProduct = (state = intialState, action) => {
    switch(action.type) {
        case 'fetch-product' :
            localStorage.setItem('product', JSON.stringify(action.payload));
            return action.payload;
        default : return state;
    }
} 

export default handleProduct;