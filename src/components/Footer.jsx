import React from 'react'

const Footer = () => {
    return (
        <div className='bg-teal-900 pt-6 px-4 pb-2'>
            <div className='flex justify-evenly gap-20 text-white'>
                <div className='w-[500px]'>
                    <a href="/" className='text-2xl font-bold text-gray-100 mb-3 block'><i className="fa-solid fa-truck"></i>&nbsp;Daily Cart</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam, tempore voluptatibus vero facilis at ratione sunt hic maxime fugiat cupiditate iure nostrum officiis asperiores maiores. Quasi odit illum cumque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl mb-3'>Links</h3>
                    <a href="/">Home</a><br />
                    <a href="/cart">Cart</a><br />
                    <a href="/wishlist">Wishlist</a>
                </div>
                <div>
                    <h3 className='font-bold text-2xl mb-3'>Guides</h3>
                    <p>React</p>
                    <p>React Router</p>
                    <p>React Bootstrap</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl mb-3'>Contact Us</h3>
                    <input type="email" placeholder='Enter Your Email' className='bg-white text-black px-4 py-2 rounded-md' />
                    <button><i className="fa-solid fa-arrow-right ms-4"></i></button>
                </div>
            </div>
            <p className='text-center my-4 text-white'>&copy; Ashik Biju | 2025</p>
        </div>
    )
}

export default Footer