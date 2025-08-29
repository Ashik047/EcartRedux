import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer);
    // console.log(allProducts, loading, errorMsg);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const totalPages = Math.ceil(allProducts?.length / productsPerPage);
    const currentPageLastIndex = currentPage * productsPerPage;
    const currentPageFirstIndex = currentPageLastIndex - productsPerPage;
    const currentPageProducts = allProducts?.slice(currentPageFirstIndex, currentPageLastIndex);

    const navigateToNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(page => page + 1);
        }
    }
    const navigateToPrev = () => {
        if (currentPage > 1) {
            setCurrentPage(page => page - 1);
        }
    }

    return (
        <>
            <Header isSearch={true} />

            <div className='container px-10 w-full pt-[40px] py-6 grow mx-auto'>
                {
                    loading ? (<div className='flex justify-center items-center w-full text-center h-full grow my-auto'>
                        <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="loading" className='w-[200px] aspect-square object-cover object-center text-center block' />
                    </div>) : currentPageProducts?.length > 0 ? (
                        <div className='grid grid-cols-4 gap-4'>
                            {
                                currentPageProducts?.map((product) => (
                                    <div key={product?.id} className='rounded border border-black shadow w-full'>
                                        <img src={product?.thumbnail} alt="prodcut" className='w-full h-[200px] mb-4 object-cover' />
                                        <div className='text-center'>
                                            <h3 className='text-4xl font-extrabold mb-4'>{product?.title}</h3>
                                            <div ><Link to={`/${product.id}/view`} className='p-2 bg-teal-800 rounded-lg text-white mb-4 block w-1/2 mx-auto hover:bg-teal-600' >View More</Link></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (<div className='flex justify-center items-center text-4xl font-bold'>Products Not Found</div>)

                }

            </div>
            <div className='text-2xl text-center font-bold mt-20 mb-5'>
                <span onClick={navigateToPrev} className="cursor-pointer"><i className='fa-solid fa-backward me-5'></i></span>
                <span className="me-5">{currentPage} of {totalPages}</span>
                <span onClick={navigateToNext} className="cursor-pointer"><i className='fa-solid fa-forward me-5'></i></span>
            </div>
        </>
    )
}

export default Home