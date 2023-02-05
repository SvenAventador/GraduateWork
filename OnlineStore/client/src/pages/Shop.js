import React, {useContext} from 'react';
import {Context} from "../index";


const Shop = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            Shop
        </div>
    );
};

export default Shop;