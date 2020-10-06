import ApolloClient, { gql } from 'apollo-boost';

import {updateLocationCurrentSearchAction} from './searchDuck';

//constant
let initialData={
	fetching: false,
	array: [],//array of locations
    nextPage: 1,
    error:false,
    errorMessage:""
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_LOCATIONS = "GET_LOCATIONS"
let GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS"
let GET_LOCATIONS_ERROR = "GET_LOCATIONS_ERROR"

let REMOVE_LOCATIONS = "REMOVE_LOCATIONS"

let UPDATE_PAGE_LOC = "UPDATE_PAGE_LOC"


export default function reducer(state=initialData, action){
	switch(action.type){
		case REMOVE_LOCATIONS:
			return {...state, array: [], nextPage:1, error:false, errorMessage:""}
		case GET_LOCATIONS:
            return{ ...state, fetching: true  }
        case UPDATE_PAGE_LOC:
			return {...state, nextPage: action.payload}
		case GET_LOCATIONS_ERROR:
			return{ ...state,array: [], fetching:false, error: action.payload.error, errorMessage:action.payload.errorMessage}
		case GET_LOCATIONS_SUCCESS:
			return{ ...state, array: [...state.array,action.payload].flat() , fetching:false }
		default:
			return state
	}
}

//aux

//action (thunks)

export const removeLocationsAction = () => (dispatch, getState) =>{
	updateLocationCurrentSearchAction("")
	dispatch({
		type: REMOVE_LOCATIONS,
	})
}



export let getLocationsAction = (value,select) => (dispatch,getState) => {
    let searchValue = value;
    let searchSelect = select;
    let query
    if (searchSelect === "name"){
        query = gql`query ($page:Int,$search:String){
            locations(page:$page,filter:{name:$search}){
                info{
                  pages
                  next
                  prev
                }
                results{
                  id
                  name
                  type
                  dimension
                  residents{
                    name
                    image
                  }
                  
                }
            }
        }
        `
    }else{
        query = gql`query ($page:Int,$search:String){
            locations(page:$page,filter:{type:$search}){
                info{
                  pages
                  next
                  prev
                }
                results{
                  id
                  name
                  type
                  dimension
                  residents{
                    name
                    image
                  }
                  
                }
            }
        }
        `
    }

    dispatch({
        type: GET_LOCATIONS,
    })
    let {nextPage} = getState().locations
    console.log(nextPage)
    return client.query({
        query,
        variables: { search: searchValue, page:nextPage }
    })
        .then(({ data}) => {
            dispatch({
                type: GET_LOCATIONS_SUCCESS,
                payload: data.locations.results
            })  
            dispatch({
                type: UPDATE_PAGE_LOC,
                payload: data.locations.info.next
            })
        })
        .catch(error =>{
            dispatch({
                type: GET_LOCATIONS_ERROR,
                payload:{ 
                    error:true,
                    errorMessage:`Error! ${error}`
                }
            })
            return
        }) 
    
}