import paginate from "../utils";
export const reducer = (state, action) => {
	if (action.type === "FETCH") {
		return {
			...state,
			users: action.users,
			loading: action.loading,
			set: action.set,
		};
	}

	if (action.type === "NEW_SET") {
		const allSet = paginate(state.users);
		if (action.payload !== "prev" && action.payload !== "next") {
			state.index = action.payload - 1;
			let newSet = allSet[state.index];
			return { ...state, set: newSet };
		} else if (action.payload === "prev") {
			let newSet;
			state.index = state.index - 1;

			if (state.index < 0) {
				state.index = allSet.length - 1;
				newSet = allSet[state.index];
				return { ...state, set: newSet };
			} else {
				newSet = allSet[state.index];
				return { ...state, set: newSet };
			}
		} else if (action.payload === "next") {
			let newSet;
			state.index = state.index + 1;

			if (state.index > allSet.length - 1) {
				state.index = 0;
				newSet = allSet[state.index];
				return { ...state, set: newSet };
			} else {
				newSet = allSet[state.index];
				return { ...state, set: newSet };
			}
		}
	}
	return state;
};
