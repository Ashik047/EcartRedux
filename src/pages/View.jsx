import React from 'react'
import Header from "../components/Header"

const View = () => {
    return (
        <>
            <Header />

            <div className='flex mx-5'>
                <div className='grid grid-cols-2 items-center w-full h-[700px] gap-4'>
                    <div><img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" alt="product" className='w-full h-[500px] mb-4' />
                        <div className='flex justify-evenly'>
                            <button><i className='fa-solid fa-heart text-red-600 text-3xl'></i></button>
                            <button><i className="fa-solid fa-cart-shopping text-blue-700 text-3xl mb-4" ></i></button>
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