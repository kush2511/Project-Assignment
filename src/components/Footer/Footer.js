import React from "react";
import "./Footer.css";
import Amazon from "../../assests/icons/footer/amazon-pay.svg";
import Dribbble from "../../assests/icons/footer/dribbble.svg";
import Facebook from "../../assests/icons/footer/facebook.svg";
import Gpay from "../../assests/icons/footer/gpay.svg";
import Instagram from "../../assests/icons/footer/instagram.svg";
import Maestro from "../../assests/icons/footer/maestro.svg";
import Mastercard from "../../assests/icons/footer/mastercard.svg";
import Rupay from "../../assests/icons/footer/rupay.svg";
import Twitter from "../../assests/icons/footer/twitter.svg";
import Visa from "../../assests/icons/footer/visa.svg";
import Dummy_Model from "../../assests/images/footer/dummy-model.jpg";
import Fashion_Model from "../../assests/images/footer/fashion-model.jpg";
import Handbag from "../../assests/images/footer/handbag.jpg";
import Hoodie from "../../assests/images/footer/hoodie.jpg";
import Jeans from "../../assests/images/footer/jeans.jpg";
import Pants from "../../assests/images/footer/pants.jpg";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="subscribe">
					<div className="subscribe_text">
						<p>subscribe to our newsletter</p>
						<p>and get $30 off coupon</p>
					</div>
					<div>
						<input
							type="email"
							name="text"
							className="subscribe_input"
							placeholder="enter your email"
						/>
					</div>
					<div>
						<button>subscribe</button>
					</div>
				</div>
				<div className="summary">
					<div className="summary_detail">
						<div className="summary_img"></div>
						<div className="summary_text">
							<h1 className="summary_h1">free</h1>
							<h4 className="summary_h4">shipping</h4>
						</div>
					</div>
					<div className="summary_detail">
						<div className="summary_img_2"></div>
						<div className="summary_text_2">
							<h4 className="summary_h4">Design on</h4>
							<h1 className="summary_h1" style={{ letterSpacing: "16px" }}>
								sale
							</h1>
						</div>
					</div>
				</div>
				<div className="blog_main">
					<div className="blog_text">From our blog</div>
					<div className="blog_div">
						<div className="blog_img">
							<div>
								<img
									className="blog_div_img"
									src={Dummy_Model}
									alt="dummy_model"
								/>
							</div>
							<div className="blog_comment">
								<p>big sales coming soon</p>
								<p>15, jan 2021</p>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Adipisci, repellat aut. Facilis libero perspiciatis maiores.
								</p>
								<p>2 comments</p>
							</div>
						</div>
						<div className="blog_img">
							<img
								className="blog_div_img"
								src={Fashion_Model}
								alt="dummy_model"
							/>
							<div className="blog_comment">
								<p>new fashion models</p>
								<p>01, jan 2021</p>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Adipisci, repellat aut. Facilis libero perspiciatis maiores.
								</p>
								<p>5 comments</p>
							</div>
						</div>
					</div>
				</div>
				<div className="connect_us">
					<div className="connect_us_div">
						<h4>connect with us</h4>
						<h6>Modello - eCommerce</h6>
						<p>4 East 80th Street, New York, NY</p>
						<p>+88 897 454 321</p>
						<p>say@hello.com</p>
						<div className="connect_us_link">
							<a href="/">
								<img src={Facebook} alt="facebook" />
							</a>
							<a href="/">
								<img src={Twitter} alt="twitter" />
							</a>
							<a href="/">
								<img src={Dribbble} alt="dribbble" />
							</a>
							<a href="/">
								<img src={Instagram} alt="instagram" />
							</a>
						</div>
					</div>
					<div className="sales">
						<h4>holiday sales</h4>
						<div>
							<div className="sales_detail">
								<div>
									<img src={Handbag} alt="" className="sales_img" />
								</div>
								<div className="sales_offer">
									<h6>channel - fashion bag</h6>
									<span>$189.00</span>
								</div>
							</div>
							<div className="sales_detail">
								<div>
									<img src={Pants} alt="" className="sales_img" />
								</div>
								<div className="sales_offer">
									<h6>Calvin Klein - Jeans</h6>
									<span className="linethrough">$220.00</span>
									<span>$189.00</span>
								</div>
							</div>
						</div>
					</div>
					<div className="sales">
						<h4>New Arrival's</h4>
						<div>
							<div className="sales_detail">
								<div>
									<img src={Jeans} alt="" className="sales_img" />
								</div>
								<div className="sales_offer">
									<h6>Calvin Klein - pants</h6>
									<span className="linethrough">$220.00</span>
									<span>$189.00</span>
								</div>
							</div>
							<div className="sales_detail">
								<div>
									<img src={Hoodie} alt="" className="sales_img" />
								</div>
								<div className="sales_offer">
									<h6>MC neal - sweater</h6>
									<span className="linethrough">$220.00</span>
									<span>$189.00</span>
								</div>
							</div>
						</div>
					</div>
					<div className="support">
						<h4>our support</h4>
						<ul type="none">
							<a href="/">
								<li>
									<span> - </span>Terms & conditions
								</li>
							</a>
							<a href="/">
								<li>
									<span> - </span>Delivery
								</li>
							</a>
							<a href="/">
								<li>
									<span> - </span>Secure Payment
								</li>
							</a>
							<a href="/">
								<li>
									<span> - </span>contact us
								</li>
							</a>
							<a href="/">
								<li>
									<span> - </span>refunds
								</li>
							</a>
							<a href="/">
								<li>
									<span> - </span>track orders
								</li>
							</a>
							<a href="/">
								<li>
									<span> - </span>services
								</li>
							</a>
						</ul>
					</div>
				</div>
				<div className="payment_cards">
					<img src={Visa} alt="visa_card" />
					<img src={Mastercard} alt="mastercard" />
					<img src={Maestro} alt="maestro" />
					<img src={Rupay} alt="rupay" />
					<img src={Gpay} alt="gpay" />
					<img src={Amazon} alt="amazon" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
