import React from 'react'
import './ExplorMenu.css'
//here we import menu-list from the assets folder so we use these menu-list items in our this components
import { menu_list } from '../../assets/assets'

const ExplorMenu = ({category,setCategory}) => {
  return (
    <div className='explor-menu' id='explor-menu'>
        <h1><span>Explore Our Menu</span></h1>
        <p className='explor-menu-text'>Choose from a deverse menu featuring  delectable array of dishes . our mission is to statisfy cravings and elevate your dining experince, once delicious meal at a time.  </p>
        <div className="explor-menu-list">
            {/*here we runder menu-list using map method from menu_list from assetss*/}
            {menu_list.map((item,index)=>{ //here item is individual food item
                return (
                    <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        {/*where item is one object from menu_list inside it prpoerty is image  and property is menu where we added imported images*/}
               <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>{/*this for images for menu */}
               <p>{item.menu_name}</p>{/*this for name of menu with images */}
                    </div>
                )
            })}

        </div>
        <hr />

    </div>
  )
}

export default ExplorMenu