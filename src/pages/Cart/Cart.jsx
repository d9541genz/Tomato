import React, { useContext } from "react";
import './Cart.css'
import { StoreContext } from "../../context/StoreContext";

function Cart() {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div>
            <h1>Giỏ hàng</h1>
            {Object.keys(cartItems).map((itemId) => (
                <div key={itemId}>
                    <p>Sản phẩm ID: {itemId}</p>
                    <p>Số lượng: {cartItems[itemId]}</p>
                    <button onClick={() => addToCart(itemId)}>Thêm</button>
                    <button onClick={() => removeFromCart(itemId)}>Xóa</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
