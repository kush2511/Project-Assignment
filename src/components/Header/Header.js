import React from "react";
import classes from "./Header.module.css";
import User from "../../assests/icons/header/user.svg";
import Wishlist from "../../assests/icons/header/wishlist.svg";
import Contact from "../../assests/icons/header/contact-us.svg";
import Search from "../../assests/icons/header/search.svg";
import Cart from "../../assests/icons/header/cart.svg";

const Header = (props) => {
	return (
		<header>
			<div className={classes.container}>
				<div className={classes.lang}>
					<div className={classes.lang_type_left}>
						<a href="/">ENG</a>
						<a href="/">DE</a>
						<a href="/">PL</a>
					</div>
					<div className={classes.lang_type_right}>
						<a href="/">US</a>
						<a href="/">EUR</a>
						<a href="/">PLN</a>
					</div>
				</div>

				<div className={classes.mid_section}>
					<div className={classes.mid}>
						<div>
							<img src={User} alt="user" />
							<span>Welcome, </span>
							<a href="/">
								<strong>login</strong>
							</a>
							<span>or</span>
							<a href="/">
								<strong>register</strong>
							</a>
						</div>
						<div>
							<img src={Contact} alt="contact" />
							<span>hotline:</span>
							<strong style={{ margin: "0 0 0 5px" }}>+91 123 456 789</strong>
						</div>
					</div>
					<div className={classes.brand_logo_container}>
						<div className={classes.brand_logo}>
							<p className={classes.brand_logo_text}>Modello</p>
						</div>
					</div>
					<div
						className={classes.mid}
						style={{ letterSpacing: "1px", cursor: "pointer" }}
					>
						<div className={classes.mid_right}>
							<img src={Wishlist} alt="wishlist" />
							<span>Wishlist:</span>
							<strong style={{ margin: "0 15px 0 5px" }}>2</strong>
							<img src={Cart} alt="cart" />
							<span>cart:</span>
							<strong style={{ margin: "0 0 0 5px" }}>3 - </strong>
							{/* <span style={{ margin: "0 0 0 5px", textTransform: "lowercase" }}>
								item(s) -
							</span> */}
							<strong style={{ margin: "0 0 0 5px", color: "#1d9c82" }}>
								$129.00
							</strong>
						</div>
						<div className={classes.main_search}>
							<input
								type="text"
								name="search"
								className={classes.search}
								placeholder="search"
							/>
							<img src={Search} alt="search" className={classes.search_img} />
						</div>
					</div>
				</div>
				<nav>
					<ul className={classes.navbar}>
						<li>jackets</li>
						<li>Sweaters</li>
						<li>dresses</li>
						<li>skirts</li>
						<li>pants</li>
						<li>shorts</li>
						<li>shoes</li>
						<li>accessories</li>
					</ul>
				</nav>
				<div className={classes.header_img}>
					<div className={classes.header_img_src}></div>
					<div className={classes.header_img_text}>
						<p className={classes.header_img_p1}>Check out New</p>
						<p className={classes.header_img_p2}>collection</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
