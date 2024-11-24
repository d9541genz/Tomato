import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category, setCategory }) => {
    const { food_list } = useContext(StoreContext);

    const handleClick = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name}
                                description={item.description} 
                                price={item.price} 
                                image={item.image}
                                category={item.category} // Truyền category của món ăn
                                handleClick={handleClick} // Truyền hàm handleClick
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default FoodDisplay