/** @format */

import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<main className={classes.main}>
			<div className={classes.mainText}>
				<h1>Welcome to your Dashboard John!</h1>
				<Link to="/Signature">
					<h2>Signatures required:</h2>
				</Link>
				<Link to="">
					<h2>Document History</h2>
				</Link>
				<Link to="">
					<h2>Upload Docs</h2>
				</Link>
			</div>
		</main>
	);
};

export default Dashboard;
