import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import { useDispatch, useSelector } from 'react-redux'
import { decrementQty, emptyCart, incrementQty, removeCartItem } from '../redux/slices/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const userCart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        if (userCart?.length) {
            setCartTotal(userCart?.map(item => item?.totalPrice).reduce((sum, price) => (sum + price)));
        }
    }, [userCart]);
    const handleDecrement = (product) => {
        if (product?.quantity == 1) {
            dispatch(removeCartItem(product.id));
        } else {
            dispatch(decrementQty(product.id));
        }
    }
    const handleCheckOut = () => {
        dispatch(emptyCart());
        alert("Thank You for Purchasing...");
        navigate("/");
    }
    return (
        <>
            <Header isSearch={false} />
            <div className='p-4 grow'>
                <h1 className='text-teal-800 text-6xl font-extrabold my-4'>Cart Summary</h1>
                {
                    userCart?.length ? (
                        <div className='grid grid-cols-[2fr_1fr] gap-6'>
                            <div >
                                <table className='rounded-md shadow-lg table-auto text-center w-full mb-4 border-separate border-spacing-y-4 p-6'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userCart?.map((product, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{product.title}</td>
                                                    <td><img src={product.thumbnail} alt="product" className='w-[100px] h-[100px] mx-auto object-cover' /></td>
                                                    <td><button onClick={() => handleDecrement(product)}>-&nbsp;</button><input className='border rounded-sm p-2 w-[50px]' readOnly value={product.quantity} /><button onClick={() => (dispatch(incrementQty(product.id)))}>&nbsp;+</button></td>
                                                    <td>${Math.floor(product.totalPrice * 100) / 100}</td>
                                                    <td><button onClick={() => dispatch(removeCartItem(product.id))}><i className="fa-solid fa-trash text-red-700"></i></button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <div className='flex justify-end gap-6'>
                                    <button onClick={() => dispatch(emptyCart())} className='bg-red-700 rounded-md text-white hover:bg-red-500 py-2 px-6'>Empty Cart</button>
                                    <Link to="/" className='bg-blue-700 rounded-md text-white hover:bg-blue-500 py-2 px-6'>Shop More</Link>
                                </div>
                            </div>
                            <div className='mt-10 ms-10'>
                                <h3 className='mb-3 font-bold text-3xl'>Total Amount <span className='text-blue-700'>${Math.floor(cartTotal * 100) / 100}</span></h3>
                                <button onClick={handleCheckOut} className='bg-green-700 rounded-md text-white hover:bg-green-500 py-2 px-6'>Check Out</button>
                            </div>

                        </div>) :
                        (
                            <div className='grow grid place-content-center'>
                                <img src="/emptycart.png" alt="empty wishlist" className='w-[300px] aspect-square' />
                            </div>
                        )
                }
            </div>
        </>

    )
}

export default Cart