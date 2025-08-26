import React from 'react'
import Header from "../components/Header"

const Cart = () => {
    return (

        <>
            <Header isSearch={false} />
            <div className='p-4 grow'>
                <h1 className='text-teal-800 text-6xl font-extrabold my-4'>Cart Summary</h1>
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
                                <tr>
                                    <td>1</td>
                                    <td>Name</td>
                                    <td><img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" alt="product" className='w-[100px] h-[100px] mx-auto object-cover' /></td>
                                    <td>Quantity</td>
                                    <td><button>-&nbsp;</button><input className='border rounded-sm p-2 w-[50px]' readOnly value={12} /><button>&nbsp;+</button></td>
                                    <td><button><i className="fa-solid fa-trash text-red-700"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex justify-end gap-6'>
                            <button className='bg-red-700 rounded-md text-white hover:bg-red-500 py-2 px-6'>Empty Cart</button>
                            <button className='bg-blue-700 rounded-md text-white hover:bg-blue-500 py-2 px-6'>Shop More</button>
                        </div>
                    </div>
                    <div className='mt-10 ms-10'>
                        <h3 className='mb-3 font-bold text-3xl'>Total Amount <span className='text-blue-700'>$15.00</span></h3>
                        <button className='bg-green-700 rounded-md text-white hover:bg-green-500 py-2 px-6'>Check Out</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Cart