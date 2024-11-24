import React, { useState } from "react";
import './Home.css'
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
    const [category, setCateory] = useState("All")
    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCateory}></ExploreMenu>
            <FoodDisplay catagory={category} setCategory={setCateory}/>
        </div>
    )
}

export default Home