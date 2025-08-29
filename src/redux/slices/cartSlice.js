import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        addToCart: (state, actionByComponent) => {
            const existingProduct = state.find(item => item.id == actionByComponent.payload.id);
            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                const updatedState = state.map(item => {
                    if (item.id == actionByComponent.payload.id) {
                        return existingProduct;
                    } else {
                        return item;
                    }
                });
                state = [...updatedState];
            } else {
                state.push({ ...actionByComponent.payload, quantity: 1, totalPrice: actionByComponent.payload.price });
            }
        },
        incrementQty: (state, actionByCart) => {
            const existingProduct = state.find(item => item.id == actionByCart.payload);
            existingProduct.quantity++;
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            const updatedState = state.map(item => {
                if (item.id == actionByCart.payload) {
                    return existingProduct;
                } else {
                    return item;
                }
            });
            state = [...updatedState];
        },
        removeCartItem: (state, actionByCart) => {
            return state?.filter(item => item?.id != actionByCart.payload);
        },
        decrementQty: (state, actionByCart) => {
            const existingProduct = state.find(item => item.id == actionByCart.payload);
            existingProduct.quantity--;
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            const updatedState = state.map(item => {
                if (item.id == actionByCart.payload) {
                    return existingProduct;
                } else {
                    return item;
                }
            });
            state = [...updatedState];
        },
        emptyCart: (state) => {
            return state = [];
        }
    }
})

export const { addToCart, incrementQty, removeCartItem, decrementQty, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;