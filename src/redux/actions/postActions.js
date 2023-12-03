import {POST_LOADING_START, POST_DATA_SUCCESS, POST_DATA_FAILURE,STORE_HISTORY_DATA} from "./actionTypes"
import axios from "axios"



export  function start_Loading_Data(){

    return{
        type : POST_LOADING_START
    }
}


export function store_Fetched_Data(APIdata){

  return{
      type : POST_DATA_SUCCESS,
      payload : APIdata
  }

}

export function store_Error_Data(errorData){

  return{
      type : POST_DATA_FAILURE,
      payload : errorData
  }

}

export function store_History(word){
  return{
    type:STORE_HISTORY_DATA,
    word:word
  }

}



// this below function combines actions that are responsible for performing single task

export function fetch_Api_data(word_To_Search){
  return(
    async(dispatch)=>{

      dispatch(start_Loading_Data())

      try{
        const info = await axios.get(` https://api.dictionaryapi.dev/api/v2/entries/en/${word_To_Search}`)

        let requiredData = validateRequiredData(info.data)
        dispatch(store_Fetched_Data(requiredData))
        dispatch(store_History(word_To_Search))
      }
      catch(error){
          dispatch(store_Error_Data(error))
      }

    }
  )
}



  function validateRequiredData(data){
      
      let rootWord = data[0].word 
      let Meanings = data[0].meanings
      let Phonetic = data[0].phonetic


      let partsOfSpeechInfo = []

          Meanings.map((obj)=>{
                  if(obj.partOfSpeech){
                    
                      if(obj.partOfSpeech === "noun" || obj.partOfSpeech === "verb"){

                        let speech = obj.partOfSpeech
                        let defination = obj.definitions[0].definition
                        let example = obj.definitions[0].example

                        partsOfSpeechInfo.push({
                          speech,
                          defination,
                          example
                        })
                      }
                  }
            })

      let audioInfo =[]
      data[0].phonetics.map((obj)=>{
        if(obj.audio){
          audioInfo.push(obj.audio)
        }
      }) 
      

        const finalInformation = [
          {
            rootWord,
            Phonetic,
            partsOfSpeechInfo,
            audioInfo
        }
       ]
    
      
     return finalInformation 
    }