import React from "react";
import { useGlobalContext } from "../services/context";

const Pages = ({ avatar_url, login, html_url }) => {
	const { set } = useGlobalContext();

	return (
		<div className="page">
			<img src={avatar_url} alt={login} />
			<p>{login}</p>
			<a href={html_url} target="_blank" rel="noopener noreferrer">
				VIEW PROFILE
			</a>
		</div>
	);
};

export default Pages;
