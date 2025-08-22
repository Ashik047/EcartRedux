import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"


const WishList = () => {
    return (
        <>
            <Header />

            <div className='container px-10 w-full pt-[40px]'>
                <h1 className='text-teal-800 font-extrabold mb-6 text-5xl'>Wishlist</h1>
                <div className='grid grid-cols-4 gap-4'>
                    <div className='rounded border border-black shadow w-full'>
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" alt="prodcut" className='w-full h-[200px] mb-4' />
                        <div className='text-center'>
                            <h3 className='text-4xl font-extrabold mb-4'>Title</h3>
                            <div className='flex justify-evenly'>
                                <button><i className='fa-solid fa-heart text-red-600 text-2xl'></i></button>
                                <button><i className="fa-solid fa-cart-shopping text-blue-700 text-2xl mb-4" ></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList