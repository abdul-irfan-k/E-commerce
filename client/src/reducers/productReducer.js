import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
    name: 'productReducer',
    initialState: {},
    reducers: {
        getProducts: (state, action) => {

        },
        getProduct: (state, action) => {

        },
        deleteProduct: (state, action) => {

        },
        editProduct: (state, action) => {

        },
        addProduct: (state, action) => {

        }
    }
})

export const cartProductReducer = createSlice({
    name: 'cartProductReducer',
    initialState: {},
    reducers: {
        getCartProducts: (state, action) => {

        },
        getCartProduct: (state, action) => {

        },
        addCartProduct: (state, action) => {

        },
        EditCartProduct: (state, action) => {

        },
        deleteCartProduct: (state, action) => {

        }
    }
})

export const productBannerReducer = createSlice({
    name: 'productBannerReducer',
    initialState: {},
    reducers: {
        getProductBanners: (state, action) => {

        },
        getProductBanner: (state, action) => {

        }
    }
})

export const orderedProductReducer = createSlice({
    name: 'orderedProductReducer',
    initialState: {},
    reducers: {
        getOrderedProducts: (state, action) => { },
        getOrderedProduct: (state, action) => { },
        addOrderedProduct: (state, action) => { },
        editOrderedProduct: (state, action) => { },
        deleteOrderedProduct: (state, action) => { },
    }
})


export const offerProductReducer = createSlice({
    name: 'offerProductReducer',
    initialState: {},
    reducers: {
        getOfferProducts: () => { },
        getOfferProduct: () => { },
    }
})
export const specialOfferProductReducer = createSlice({
    name: 'specialOfferProductReducer',
    initialState: {},
    reducers: {
        getSpecialOfferProducts: () => { },
        getSpecialOfferProduct: () => { },
    }
})

