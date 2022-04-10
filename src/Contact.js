/** @format */

import { Link } from "react-router-dom";
import classes from "./Contact.module.css";
import { Fragment } from "react";

const Contact = () => {
	return (
		<Fragment>
			<main className={classes.main}>
				<div className={classes.mainText}>
					<h1>More than just a signature</h1>
					<h2>
						Create Your Signature
						<span> Sign it</span>
						<span> Pass it On</span>
					</h2>
					<Link to="/SignUp">
						<button className={classes.button}>Get started</button>
					</Link>
				</div>
			</main>
			<section className={classes.section}>
				<div>
					<h2>Get in Touch</h2>
					<p>
						If you have any questions or need help, please fill out the form
						below. We do our best to respond within 1 business day.
					</p>
				</div>
				<form>
					<input type="text" className={classes.input} placeholder="Name" />
					<input
						type="email"
						className={classes.input}
						placeholder="John@gmail.com"
					/>
					<textarea placeholder="Message"></textarea>
					<button className={classes.formButton}>Submit</button>
				</form>
			</section>
		</Fragment>
	);
};

export default Contact;
