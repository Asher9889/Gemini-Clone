
import { useContext } from "react";
import { BiImageAdd } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import { DataContext } from "../../context/Context";



const Input = () => {

 const {input, setInput, getData} = useContext(DataContext)
  

  return (
    <div className='input w-[70%] pt-5  mx-auto   font-outline flex'>
      <div className='w-[90%] '>
       <input onChange={(e)=> {
        let type = e.target.value
        return setInput(type)} } value={input} className='w-full font-outline h-14 text-white outline-none text-lg bg-zinc-600 rounded-full px-6 ' type="text" placeholder='Enter a prompt here' spellCheck="true"/>          
      </div>
      <div className='image inline-block flex w-[20%] h-14 bg-zinc-600 rounded-full text-white  -ml-12 items-center gap-8 text-xl'>
      <BiImageAdd />
      <FaMicrophone/>
      {input && <IoSendSharp onClick={()=>getData(input)}  className="text-2xl rounded-md hover:opacity-60 cursor-pointer"/>}
      
      </div>
      
     
    </div>
  )
}

export default Input
