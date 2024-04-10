import React from 'react'
import Card from './Card'
import { HiOutlineLightBulb } from "react-icons/hi2";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";

const Cards = () => {

  const data = [
    {title: "Compare the differences between pickleball and tennis", image: <HiOutlineLightBulb />},
    {title: "Help me get organized with a list of 10 tips", image: <MdOutlineExplore />},
    {title: "Outline an organized & logical sales pitch for a new product", image: <MdOutlineDraw />},
    {title: "Plan a low-carb meal with what's available in my fridge", image: <MdOutlineDraw />},
  ]


  return (
    <div >
      <div className='cards w-[70%]  flex mb-[11%]  flex-wrap gap-2 mx-auto mt-10 '>
        {data.map((elem, index)=><Card key={index} title={elem.title} image={elem.image}/>)}
      </div>
    </div>
  )
}

export default Cards
