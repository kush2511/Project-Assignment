import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getProductsSuccess } from "../../action/action";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddIcon from "@material-ui/icons/Add";
import classes from "./container.module.css";

const Container = (props) => {
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products?limit=12")
			.then((response) => props.onLoadProductsComplete(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className={classes.container}>
			<div className={classes.feat_arr}>
				<div className={classes.feature}>
					<h1>Featured</h1>
					<KeyboardArrowDownIcon
						className={classes.down_arrow}
						style={{ marginRight: "10px" }}
					/>
				</div>
				<div className={classes.arrivals}>
					<h1 style={{ fontWeight: "200" }}>Arrivals</h1>
					<KeyboardArrowDownIcon className={classes.down_arrow} />
				</div>
			</div>
			<div className={classes.productRange}>
				<p>We have more than 2000 products in our shop</p>
			</div>

			{props.products ? (
				<div className={classes.product_banner}>
					{props.products.map((product) => (
						<div key={product.id} className={classes.individual_banner}>
							{/* {console.log(product)} */}
							<FavoriteBorderIcon className={classes.wishlist} />
							<div>
								<img
									src={product.image}
									alt="product_image"
									className={classes.product_image}
								/>
							</div>
							<div>
								<p className={classes.title}>calvin klien</p>
							</div>
							<div>
								<p className={classes.category}>{product.category}</p>
							</div>
							<div>
								<p className={classes.price}>${product.price}</p>
							</div>
							<button className={classes.button}>Add to cart</button>
						</div>
					))}
				</div>
			) : null}
			<div className={classes.loadMore}>
				<AddIcon style={{ color: "rgb(117, 117, 117) " }} />

				<h4>Load more products</h4>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadProductsComplete: (products) => {
			dispatch(getProductsSuccess(products));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
