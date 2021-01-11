import React from "react";

const Products = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{console.log(props.title)}
		</div>
	);
};

export default Products;
