import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light ">
			<div className="container ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 "> {store.cohorte} </span>
				</Link>
				<div className="ml-auto">
					<Link to="/Contact">
						<button className="btn btn-success">Add New Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
