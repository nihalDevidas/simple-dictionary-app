
import {POST_LOADING_START, POST_DATA_SUCCESS, POST_DATA_FAILURE,STORE_HISTORY_DATA} from "../actions/actionTypes"


let initialState = {

    loading : false,
    data : [],
    error : null,
    history :[]
}


const postReducer = (state = initialState, actions)=>{

      switch(actions.type){

          case POST_LOADING_START : return {...state, loading : true, data : [], error: null}

          case POST_DATA_SUCCESS : return{...state, loading : false, data : actions.payload, error : null}
          
          case POST_DATA_FAILURE : return{...state, loading : false, data : [], error : actions.payload}

          case STORE_HISTORY_DATA : 
                                 let arr = [...state.history]
                                     arr.push(actions.word)
                                     return{...state, history : [...arr]}

          default : return state 

      }
}

export default postReducer