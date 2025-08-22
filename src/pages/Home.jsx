import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"

const Home = () => {
    return (
        <>
            <Header />

            <div className='container px-10 w-full pt-[40px] py-6'>
                <div className='grid grid-cols-4 gap-4'>
                    <div className='rounded border border-black shadow w-full'>
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" alt="prodcut" className='w-full h-[200px] mb-4' />
                        <div className='text-center'>
                            <h3 className='text-4xl font-extrabold mb-4'>Title</h3>
                            <div ><Link to={"/id/view"} className='p-2 bg-teal-800 rounded-lg text-white mb-4 block w-1/2 mx-auto hover:bg-teal-600' >View More</Link></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home