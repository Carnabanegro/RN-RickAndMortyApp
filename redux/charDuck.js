import ApolloClient, { gql } from 'apollo-boost';

import {updateCharacterCurrentSearchAction} from '../redux/searchDuck';


//constant
let initialData={
	fetching: false,
    array: [],
    nextPage:1,
    error:false,
    errorMessage:""
}

let client = new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql"
   
})

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

let UPDATE_PAGE_CHAR = "UPDATE_PAGE_CHAR"

let REMOVE_CHARACTER = "REMOVE_CHARACTER"

export default function reducer(state=initialData, action){
	switch(action.type){
		case REMOVE_CHARACTER:
            return {...state, array: [], nextPage:1, error:false, errorMessage:""  }
		case GET_CHARACTERS:
            return{ ...state, fetching: true }
        case UPDATE_PAGE_CHAR:
			return {...state, nextPage: action.payload}
		case GET_CHARACTERS_ERROR:
			return{ ...state,array: [], fetching:false, error: action.payload}
		case GET_CHARACTERS_SUCCESS:
			return{ ...state, array: [...state.array,action.payload].flat() , fetching:false }
		default:
			return state
	}
}

//action (thunks)

export const removeCharactersAction = () => (dispatch, getState) =>{
    updateCharacterCurrentSearchAction("")
    dispatch({
		type: REMOVE_CHARACTER,
	})
}

export let getCharactersAction = (value,select) => (dispatch, getState) => {
    let searchValue = value
    let searchType = select
    let query
    if (searchType === "name"){
        query = gql`query ($page:Int,$search:String){
            characters(page:$page,filter:{name:$search}){
                info{
                    pages
                    next
                    prev
                }
                results{
                    id
                    name
                    image
                    species
                    type
                    gender
                }
            }
        }
        `
    }else{
        query = gql`query ($page:Int,$search:String){
            characters(page:$page,filter:{type:$search}){
                info{
                    pages
                    next
                    prev
                }
                results{
                    id
                    name
                    image
                    species
                    type
                    gender
                }
            }
        }
        `
    }
    
 
    dispatch({
        type: GET_CHARACTERS
    })
    let {nextPage} = getState().characters
    console.log(nextPage)
    return client.query({
        query,
        variables: { search: searchValue, page:nextPage}
    })
    .then(({ data}) => {
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: data.characters.results   
        })
        dispatch({
            type: UPDATE_PAGE_CHAR,
            payload: data.characters.info.next
        })
    })
    
    .catch(error =>{
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload:{ 
                    error:true,
                    errorMessage:`Error! ${error}`
                }
            })
            return
    })
    
}