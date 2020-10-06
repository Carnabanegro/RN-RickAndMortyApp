import ApolloClient, { gql } from 'apollo-boost'
import {updateEpisodeCurrentSearchAction} from './searchDuck';
//constant
let initialData={
	fetching: false,
	array: [],//array of episodes
    nextPage:1,
    error:false,
    errorMessage:""
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_EPISODES = "GET_EPISODES"
let GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS"
let GET_EPISODES_ERROR = "GET_EPISODES_ERROR"

let REMOVE_EPISODES = "REMOVE_EPISODES"

let UPDATE_PAGE_EPI = "UPDATE_PAGE_EPI"


export default function reducer(state=initialData, action){
	switch(action.type){
		case UPDATE_PAGE_EPI:
			return  {...state, nextPage: action.payload}
		case REMOVE_EPISODES:
			return {...state, array: [], nextPage:1, error:false, errorMessage:""  }
		case GET_EPISODES:
			return{ ...state,  fetching: true }
		case GET_EPISODES_ERROR:
			return{ ...state,array: [], fetching:false, error: action.payload}
		case GET_EPISODES_SUCCESS:
			return{ ...state, array: [...state.array,action.payload].flat() , fetching:false }
		default:
			return state
	}
}

//aux

//action (thunks)

export const removeEpisodesAction = () => (dispatch, getState) =>{
    updateEpisodeCurrentSearchAction("")
	dispatch({
		type: REMOVE_EPISODES,
	})
}



export let getEpisodesAction = (value) => (dispatch,getState) => {
    let searchValue = value
    let query = gql`query ($page:Int,$name:String){
        episodes(page:$page,filter:{name:$name}){
            info{
              pages
              next
              prev
            }
            results{
              id
              name
              air_date
              episode
              characters{
                name
                image
              }
            }
            }
          }
          
    `
    dispatch({
        type: GET_EPISODES,
        payload: searchValue
    })
    let {nextPage} = getState().episodes
    console.log(nextPage)
    return client.query({
        query,
        variables: { name: searchValue, page:nextPage }
    })
        .then(({ data}) => {
            dispatch({
                type: GET_EPISODES_SUCCESS,
                payload: data.episodes.results
            })
            dispatch({
                type: UPDATE_PAGE_EPI,
                payload: data.episodes.info.next
            })    
        })
        .catch(error =>{
            dispatch({
                type: GET_EPISODES_ERROR,
                payload: { 
                    error:true,
                    errorMessage:`Error! ${error}`
                }
            })
            return
        })
   
}