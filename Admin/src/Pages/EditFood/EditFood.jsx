// >>> Added for Edit functionality
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditFood.css"; 

const EditFood = () => {
  const { state } = useLocation();
  const food = state?.food;
  const navigate = useNavigate();

  const url = "http://localhost:4000";

  const [data, setData] = useState({
    id: food._id,
    name: food.name,
    description: food.description,
    price: food.price,
    category: food.category,
    image: null,
  });

  const onChangeHandler = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setData({ ...data, image: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await axios.post(`${url}/api/food/update`, formData);
    if (response.data.success) {
      alert("Food updated successfully!");
      navigate("/list");
    } else {
      alert("Error updating food");
    }
  };

  return (
    <div className="edit">
      <form className="edit-form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={data.name}
          onChange={onChangeHandler}
          required
        />
        <textarea
          name="description"
          placeholder="Food Description"
          value={data.description}
          onChange={onChangeHandler}
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Food Price"
          value={data.price}
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Food Category"
          value={data.category}
          onChange={onChangeHandler}
          required
        />
        <input type="file" name="image" onChange={onChangeHandler} />
        <button type="submit">Update Food</button>
      </form>
    </div>
  );
};

export default EditFood;
// <<< Added for Edit functionality