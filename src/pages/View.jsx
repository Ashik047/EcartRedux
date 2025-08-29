import React from 'react'
import Header from "../components/Header"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

const View = () => {

    const dispatch = useDispatch();
    const userWishlist = useSelector(state => state.wishlistReducer);
    const userCart = useSelector(state => state.cartReducer);
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { allProducts } = useSelector(state => state.productReducer);

    useEffect(() => {
        if (sessionStorage.getItem("allProducts")) {
            const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
            setProduct(allProducts?.find(item => item.id == id));
        }
    }, [])
    // console.log(product);
    const handleWishlist = () => {
        if (!userWishlist?.find(item => item.id == id)) {
            dispatch(addToWishlist(product));
            alert("Product is added to the wishlist");
        } else {
            alert("Product is already in the wishlist");
        }
    }
    const handleCart = () => {
        dispatch(addToCart(product));
        if (!userCart?.find(item => item.id == id)) {
            alert("Product is added to the cart");
        } else {
            alert("Product quantity incremented");
        }
    }


    return (
        <>
            <Header isSearch={false} />

            <div className='flex mx-5 grow'>
                <div className='grid grid-cols-2 items-center w-full h-[700px] gap-4'>
                    <div><img src={product?.thumbnail} alt="product" className='w-full h-[500px] mb-4 object-contain' />
                        <div className='flex justify-evenly'>
                            <button className='bg-red-700 rounded-md text-white hover:bg-red-500 py-2 px-6' onClick={handleWishlist}>Add to Wishlist</button>
                            <button className='bg-blue-700 rounded-md text-white hover:bg-blue-500 py-2 px-6' onClick={handleCart}>Add to Cart</button>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold mb-6'>Pid:{product?.id}</h3>
                        <h2 className='font-extrabold text-5xl text-teal-800 mb-6'>{product?.title}</h2>
                        <h4 className='font-bold mb-4'>${product?.price}</h4>
                        <h4 className='mb-4'>{product?.brand}</h4>
                        <h4 className='mb-4'>{product?.category}</h4>
                        <p className='mb-4'>
                            <span className='font-bold'>Description : </span>{product?.description}
                        </p>
                        <h4 className='font-bold mb-4'>Client Reviews: </h4>
                        <ul>
                            {
                                product?.reviews?.length > 0 ?
                                    product?.reviews?.map((item, ind) => (
                                        <li key={ind}>{item?.comment} - {item?.reviewerName}</li>
                                    )) : <p>No reviews Yet</p>
                            }
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}

export default View