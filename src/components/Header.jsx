import React from 'react'

const Header = ({ isSearch }) => {
    return (
        <div className='w-full h-[70px] bg-teal-900 flex justify-between items-center px-6 py-2'>
            <div><a href="/" className='text-2xl font-bold text-gray-100'><i className="fa-solid fa-truck"></i>&nbsp;Daily Cart</a></div>
            <div className='flex gap-2 items-center'>
                {isSearch && <input type="text" placeholder='Search Product Here' className='bg-white p-2 rounded-md me-10 w-[400px]' />}
                <a href='/wishlist' className='me-4 font-semibold'><i className='fa-solid fa-heart text-red-600'></i>&nbsp;Wishlist <span className='bg-white p-1 rounded-sm'>0</span></a>
                <a href='/cart' className='font-semibold'><i className="fa-solid fa-cart-shopping text-blue-700" ></i>&nbsp;Cart <span className='bg-white p-1 rounded-sm'>0</span></a>
            </div>
        </div>
    )
}

export default Header