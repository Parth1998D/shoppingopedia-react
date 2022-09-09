const intialState = localStorage.getItem('add_to_cart') ? JSON.parse(localStorage.getItem('add_to_cart')) : [];
const handleCart = (state = intialState,action) => {
    switch(action.type) {
        case 'ADD_TO_CART' : 
            const product = action.payload;
            console.log(product);
            let data = [];
            // Check if product alreeady exist in cart
            const exist = state.find((elm) => elm.id == product.id);
            if (exist) {
                //Increse product qty
                 data =  state.map((elem) => {
                    if (elem.id === product.id ) {
                        elem.qty = elem.qty+1;
                    }
                    return elem;
                })
            } else {
                // add to cart
                product['qty'] = 1;
                 data = [...state, {
                    ...product
                }]
            }

            localStorage.setItem('add_to_cart', JSON.stringify(data)); 
            return data;
            
        case 'REMOVE_FROM_CART' : 
            const productId = action.payload;
            let data2 = state.filter((elm) => {
                return elm.id != productId;
            });
            localStorage.setItem('add_to_cart', JSON.stringify(data2)); 
            return data2;

        default : return state;
    }
}

export default handleCart;