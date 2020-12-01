import axios from 'axios';

const API = `${process.env.REACT_APP_API}/${process.env.REACT_APP_ENDPOINT}`;

const getProducts = () => {
	return axios.get(API);
};

const getProductById = (id) => {
	return axios.get(`${API}/${id}`);
};

const updateProduct = (product) => {
	return axios.put(`${API}/${product.id}`, product);
};

const deleteProduct = (id) => {
	return axios.delete(`${API}/${id}`);
};

const createProduct = (product) => {
	return axios.post(API, {...product, id: Date.now()}, {
		headers: {
			authorization: 'Bearer $ewriw923i49i324234234'
		}
	});
};

export default {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct
}
