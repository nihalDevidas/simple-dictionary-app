import React from 'react'
import {useSelector} from "react-redux"


const SearchDisplay = () => {

     const{data} = useSelector(state=>state)   // get required data from store
    
 
        return (
          <div className='disp-con'>
                  <div className='rootword'>{data.length >0 && "Word :"+data[0].rootWord}</div>

                  <div className='phto'>{ data.length >0 && data[0].Phonetic}</div>

                      <div className='audio'>
                        {data.length > 0 && <audio src = {data[0].audioInfo[0]} controls/>}
                      </div>

                  <div className='phto'>{data.length >0 && data[0].Phonetic}</div>

              <div>
                  {
                    data.length >0 
                          && 
                    data[0].partsOfSpeechInfo.map(obj=>{
                          return(
                              <div className='parts'>
                              {obj.speech && <div className="spt"><span>Part of Speech :</span>{obj.speech}</div>}
                              {obj.defination && <div><span>Definition :</span>{obj.defination}</div>}
                              {obj.example && <div><span>Example :</span>{obj.example}</div>}
                              </div>
                          )
                      })
                  }
                  
              </div>

          </div>
        )
      }

export default SearchDisplay