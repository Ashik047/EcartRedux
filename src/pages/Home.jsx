import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { useEffect } from 'react'

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer);
    console.log(allProducts, loading, errorMsg);

    return (
        <>
            <Header isSearch={true} />

            <div className='container px-10 w-full pt-[40px] py-6 grow mx-auto'>
                {
                    loading ? (<div className='flex justify-center items-center w-full text-center h-full'>
                        <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="loading" className='w-[200px] aspect-square object-cover object-center text-center block' />
                    </div>) : allProducts?.length > 0 ? (
                        <div className='grid grid-cols-4 gap-4'>
                            {
                                allProducts?.map((product) => (
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
        </>
    )
}

export default Home