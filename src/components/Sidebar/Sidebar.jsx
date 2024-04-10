import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GiBackwardTime } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { DataContext } from "../../context/Context";

const Sidebar = () => {
  const {recentInput,newChat,getData,setPreviousInput,setInput}= useContext(DataContext)
  const [extended, setExtended] = useState(true);

  const sideBarSearch = async (prompt)=>{    
    await getData(prompt)
    setInput("")
  }

  return (
    <div  className="sidebar w-fit h-screen pl-1 font-outfit   pr-2 h-screen bg-zinc-200 flex flex-col justify-between">
      <div  className="top flex flex-col pt-2    text-2xl ">
        <IoMenu onClick={()=>setExtended((prev)=>!prev)} className="ml-3 hover:bg-zinc-300 w-10 h-10 rounded-full p-2" />
        <span onClick={()=>newChat()} className="flex w-fit px-3 hover:bg-zinc-300 mt-10 items-center text-zinc-700 gap-3  rounded-full text-xl  ">
          <BsPlusLg className="text-4xl p-1 text-black  rounded-full" />
          {extended && <p className="text-sm">New Chat</p>}
        </span>

        {extended && (
          <span className="recent mt-5 w-fit pl-3">
            <h3 className="text-base mb-1 font-semibold">Recent</h3>
            <div className="recent overflow-y-auto h-40  ">
            {recentInput.map((elem,index)=>{
              return < >
              <span onClick={()=> sideBarSearch(elem)} key={index} className="sidebar-prompt  text-sm hover:bg-zinc-300  h-10 ml-1 px-2 rounded-full mb-1 flex items-center gap-3 text-zinc-700">
                <MdChatBubbleOutline className="text-black" />
                <p className="w-28 text-xs font-semibold">{elem.slice(0,20)}...</p>
              </span>
              </>
            })}
            </div>
            
            
          </span>
        )}
      </div>

      <div className="bottom flex flex-col gap-1 mb-6 text-2xl">
        <span className="flex hover:bg-zinc-300 w-fit px-3 h-10  rounded-full  text-sm items-center gap-3">
          <HiOutlineQuestionMarkCircle className="text-xl" />
          {extended && <p className="w-24 ">Help</p>}
        </span>

        <span className="flex hover:bg-zinc-300 w-fit px-3 h-10  rounded-full text-sm items-center gap-3">
          <GiBackwardTime className="text-xl" />
          {extended && <p className="w-24 ">Activity</p>}
        </span>

        <span className="flex w-fit hover:bg-zinc-300 px-3   h-10   rounded-full text-sm items-center gap-3">
          <MdOutlineSettings className="text-xl" />
          {extended && <p className="w-24 ">Settings</p>}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
