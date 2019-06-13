export const PRODUCTS_FETCH = 'PRODUCTS_FETCH';
export const PRODUCTS_SET = 'PRODUCTS_SET';

export const setProducts = products => {
    return {
        type: PRODUCTS_SET,
        payload: products
    }
};    