let initialData={
	fetching: false,
	
	charCurrentSearch: "",
	epiCurrentSearch: "",
	locCurrentSearch: "",
	
	charTypeSearch: "name",
	locTypeSearch: "name",
	
	filterSearch: "characters"
}

let UPDATE_CHARACTERS_CURRENT_SEARCH = "UPDATE_CHARACTERS_CURRENT_SEARCH"
let UPDATE_EPISODES_CURRENT_SEARCH = "UPDATE_EPISODES_CURRENT_SEARCH"
let UPDATE_LOCATIONS_CURRENT_SEARCH = "UPDATE_LOCATIONS_CURRENT_SEARCH"

let UPDATE_CHARACTERS_BY_SEARCH = "UPDATE_CHARACTERS_BY_SEARCH"
let UPDATE_LOCATIONS_BY_SEARCH = "UPDATE_LOCATIONS_BY_SEARCH"

let UPDATE_FILTER_SEARCH = "UPDATE_FILTER_SEARCH"

export default function reducer(state=initialData, action){
	switch(action.type){

		case UPDATE_EPISODES_CURRENT_SEARCH:
			return {...state, epiCurrentSearch: action.payload}
		case UPDATE_LOCATIONS_CURRENT_SEARCH:
			return {...state, locCurrentSearch: action.payload}
		case UPDATE_CHARACTERS_CURRENT_SEARCH:
			return {...state, charCurrentSearch: action.payload}

		case UPDATE_CHARACTERS_BY_SEARCH:
			return {...state, charTypeSearch:action.payload}
		case UPDATE_LOCATIONS_BY_SEARCH:
			return {...state, locTypeSearch:action.payload}

		case UPDATE_FILTER_SEARCH:
			return {...state, filterSearch:action.payload}
		
		default:
			return state
	}
}

/////////////////////////CHARACTERS ACTIONS/////////////////////////////
export const updateCharacterCurrentSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_CHARACTERS_CURRENT_SEARCH,
		payload: value
	})
}


export const updateCharacterBySearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_CHARACTERS_BY_SEARCH,
		payload: value
	})
}

///////////////////////LOCATIONS ACTIONS/////////////////////////////

export const updateLocationCurrentSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_LOCATIONS_CURRENT_SEARCH,
		payload: value
	})
}


export const updateLocationBySearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_LOCATIONS_BY_SEARCH,
		payload: value
	})
}
 
//////////////////////EPISODES ACTIONS//////////////////////////////

export const updateEpisodeCurrentSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_EPISODES_CURRENT_SEARCH,
		payload: value
	})
}


/////////////////////FILTERA ACTIONS///////////////////////////////
export const updateFilterSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_FILTER_SEARCH,
		payload: value
	})
}