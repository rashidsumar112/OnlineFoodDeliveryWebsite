import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
  //here we use food_list show diferrent items details from StoreContext
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
    <h2><span>Top Dishes Near You</span></h2>
    <div className='food-display-list'>
      {/**here we use map method to acces all the items from food_list and then we in return we mount FoodItem componnets and we pass it  diffenet props parameters */}
      {food_list.map((item,index)=>{
        if(category==="All" || category===item.category){
           return(
        <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />)
    
        }
      })}

    </div>
    <hr />
    </div>
  )
}

export default FoodDisplay