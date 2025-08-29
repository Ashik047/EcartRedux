import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const WishList = () => {
    const userWishlist = useSelector(state => state.wishlistReducer);
    const userCart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const handleCart = (prodcut) => {
        dispatch(removeFromWishlist(prodcut.id))
        dispatch(addToCart(prodcut));
        if (!userCart?.find(item => item.id == prodcut.id)) {
            alert("Product is added to the cart");
        } else {
            alert("Product quantity incremented");
        }
    }
    return (
        <>
            <Header isSearch={false} />

            {
                userWishlist?.length > 0 ?
                    (
                        <div className='container px-10 w-full pt-[40px] grow'>
                            <h1 className='text-teal-800 font-extrabold mb-6 text-5xl'>Wishlist</h1>
                            <div className='grid grid-cols-3 gap-4 p-2'>
                                {
                                    userWishlist?.map((product) => (
                                        <div className='rounded border border-black shadow w-full' key={product.id}>
                                            <img src={product.thumbnail} alt="prodcut" className='w-full h-[200px] my-4 object-contain' />
                                            <div className='text-center'>
                                                <h3 className='text-4xl font-extrabold mb-4'>{product.title}</h3>
                                                <div className='flex justify-evenly'>
                                                    <button onClick={() => (dispatch(removeFromWishlist(product.id)))}><i className='fa-solid fa-heart text-red-600 text-2xl'></i></button>
                                                    <button onClick={() => (handleCart(product))}><i className="fa-solid fa-cart-shopping text-blue-700 text-2xl mb-4" ></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ) :
                    (
                        <div className='grow grid place-content-center'>
                            <img src="/emptycart.png" alt="empty wishlist" className='w-[300px] aspect-square' />
                        </div>
                    )
            }
        </>
    )
}

export default WishList