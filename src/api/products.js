import axios from 'axios';
import { setProducts } from '../actions';

export const asyncFetchProducts = () => {
    return dispatch => {
        return axios.get('/api/products')
            .then(response => {
                dispatch(setProducts(response.data))
            })
            .catch(error => {
                console.log(error);
            })
    }
}