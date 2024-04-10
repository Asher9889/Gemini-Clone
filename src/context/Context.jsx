import React, { createContext, useState } from 'react'
import runChat from '../configApi/Gemini';

export const DataContext = createContext();

const Context = (props) => { 
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("");
  const [getResult, setGetResult] = useState(false);
  const [loading, setLoading] = useState(false)
  const [previousInput, setPreviousInput] = useState("")
  const [recentInput, setRecentInput] = useState([])

  const newChat = ()=>{
    setLoading(false)
    setGetResult(false)
    setInput('')
    
  }


  const typeEffect = (index, nextWord) => {
    setTimeout(()=>{
      setOutput((prev) => [prev + nextWord + " "])
    }, 50*index)
  }

  const getData =  async (input) => {
    setOutput("")
    setGetResult(true)
    setLoading(true)
    setPreviousInput(input)
    setRecentInput((prev)=>[...prev, input]);
    let response = await  runChat(input); 
   

    // console.log(response)

    let responseArray = response.split("**")

    let newResponse = " ";
    for(let i = 0; i<responseArray.length; i++){
      if(i ===0 || i%2 === 0){
        newResponse += responseArray[i]
      }else{
        newResponse += "<b>"+responseArray[i]+ "</b>"
      }
    }

    // console.log(newResponse)
    let newArray2 = newResponse.split("*").join("<br/>")
    // console.log(newArray2)  
    const newArray3 = newArray2.split(" ")
    for(let i = 0; i<newArray3.length; i++){
      let  nextWord = newArray3[i]
      typeEffect(i, nextWord)
    }
    // console.log(newArray3)
    
    setInput(" ")    
    setLoading(false)
    
    
   
  }

  
  

 

  
  return (
    
    <DataContext.Provider value={{
      input, 
      setInput,
      output,
      setOutput,
      getData,
      getResult,
      setGetResult,
      previousInput,
      setPreviousInput,
      loading,
      recentInput,
      newChat,
      }}>
    {props.children}
    </DataContext.Provider>
  )
}

export default Context;
