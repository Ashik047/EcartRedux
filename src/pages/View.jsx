import React from 'react'
import Header from "../components/Header"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const View = () => {
    const { id } = useParams();
    const { allProducts } = useSelector(state => state.productReducer);

    useEffect(() => {
        const product = allProducts?.find(item => item.id === id)
    }, [])
    return (
        <>
            <Header isSearch={false} />

            <div className='flex mx-5 grow'>
                <div className='grid grid-cols-2 items-center w-full h-[700px] gap-4'>
                    <div><img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" alt="product" className='w-full h-[500px] mb-4 object-cover' />
                        <div className='flex justify-evenly'>
                            <button className='bg-red-700 rounded-md text-white hover:bg-red-500 py-2 px-6'>Add to Wishlist</button>
                            <button className='bg-blue-700 rounded-md text-white hover:bg-blue-500 py-2 px-6'>Add to Cart</button>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold mb-6'>Pid:</h3>
                        <h2 className='font-extrabold text-5xl text-teal-800 mb-6'>Product Name</h2>
                        <h4 className='font-bold mb-4'>Price</h4>
                        <h4 className='mb-4'>Brand</h4>
                        <h4 className='mb-4'>Category</h4>
                        <p className='mb-4'>
                            <span className='font-bold'>Description : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, odit optio repellendus perferendis ab rerum. Possimus molestias accusantium aperiam non eum voluptate, aut, et labore fuga sequi incidunt ullam veniam?
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default View