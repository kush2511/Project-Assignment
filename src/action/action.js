export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

export const getProductsSuccess = (products) => {
	return {
		type: GET_PRODUCTS_SUCCESS,
		products,
	};
};
