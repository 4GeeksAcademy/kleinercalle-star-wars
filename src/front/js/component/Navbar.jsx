import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { BtnFavorites } from "./BtnFavorites.jsx";


export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
				<Link to="/" className="navbar-brand">
					<img src="https://starwars.chocobar.net/star-wars-logo.png" alt="Inicio" style={{ width: '128px', marginRight: '55px' }} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link to="/Characters" className="nav-link">
								Characters
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</li>
					</ul>
					<BtnFavorites />

				</div>
			</div>
		</nav>
	);
};
