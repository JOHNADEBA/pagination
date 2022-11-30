import React, { useReducer, useContext, useEffect } from "react";
import paginate from "../utils";
import { reducer } from "./reducer";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const AppContext = React.createContext();

const initialState = { page: 100, users: [], loading: true, set: [], index: 0 };

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getData = async () => {
		const response = await fetch(url);
		const data = await response.json();

		let paginatedPage = paginate(data);

		dispatch({
			type: "FETCH",
			users: data,
			set: paginatedPage[state.index],
			loading: false,
		});
	};

	const getUsers = (entry) => {
		dispatch({ type: "NEW_SET", payload: entry });
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<AppContext.Provider value={{ ...state, getUsers }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
