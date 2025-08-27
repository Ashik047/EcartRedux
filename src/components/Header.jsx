import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = ({ isSearch }) => {
    const userWishlist = useSelector(state => state.wishlistReducer);
    return (
        <div className='w-full h-[70px] bg-teal-900 flex justify-between items-center px-6 py-2'>
            <div><Link to="/" className='text-2xl font-bold text-gray-100'><i className="fa-solid fa-truck"></i>&nbsp;Daily Cart</Link></div>
            <div className='flex gap-2 items-center'>
                {isSearch && <input type="text" placeholder='Search Product Here' className='bg-white p-2 rounded-md me-10 w-[400px]' />}
                <Link to='/wishlist' className='me-4 font-semibold'><i className='fa-solid fa-heart text-red-600'></i>&nbsp;Wishlist <span className='bg-white p-1 rounded-sm'>{userWishlist?.length}</span></Link>
                <Link to='/cart' className='font-semibold'><i className="fa-solid fa-cart-shopping text-blue-700" ></i>&nbsp;Cart <span className='bg-white p-1 rounded-sm'>0</span></Link>
            </div>
        </div>
    )
}

export default Header