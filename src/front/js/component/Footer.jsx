import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {
	
	return (
		<footer className="footer mt-auto py-3 bg-body-tertiary text-center bg-dark">
			<p className="text-secondary">
				Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a className="text-secondary" href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</p>
		</footer>
	)
}
