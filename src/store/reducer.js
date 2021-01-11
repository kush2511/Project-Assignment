import { GET_PRODUCTS_SUCCESS } from "../action/action";

const initialState = {
	products: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.products,
			};
		default:
			return state;
	}
};

export default reducer;
