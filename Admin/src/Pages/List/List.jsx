//Here we list all of our food items from database

// >>> Added for Edit functionality
import { useNavigate } from "react-router-dom";
// <<< Added for Edit functionality

import React, { useEffect, useState } from 'react'
import './List.css'
import axios from'axios'
import { toast, ToastContainer } from 'react-toastify'

const List = ({url}) => {

  

//this for fetching data from datbase
  const [list,setList]=useState([])

// >>> Added for Edit functionality
   const navigate = useNavigate();
  // <<< Added for Edit functionality

  const fetchList=async () =>{
    const response=await axios.get(`${url}/api/food/list`)
    
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }







  //Here we craete logic for Remove food from list
  const removeFood=async (foodId)=>{
   const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
   //when item removed it will show updated list again 
   await fetchList();
   toast.success("Removed Successfully")

  

  }
  //////my practice










  //now we call above fecth function using useEffect
  useEffect(()=>{
    fetchList()
  },[])



  return (
    <div className='list add flex-col'>
      <ToastContainer />
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Remove</b>
          <b>Update</b>
          
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              {/* >>> Added for Edit functionality */}
              <p className='cursor'
                onClick={() =>
                  navigate("/edit", { state: { food: item } })
                }
              >
                U
              </p>
              {/* <<< Added for Edit functionality */}
              
              
            </div>
          )

        })}
    </div>
   
  </div>
  )
}

export default List