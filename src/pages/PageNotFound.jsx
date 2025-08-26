import React from 'react'
import Header from '../components/Header'

const PageNotFound = () => {
    return (
        <>
            <Header isSearch={true} />
            <div className='grow grid place-content-center text-4xl font-bold'>PageNotFound</div>
        </>
    )
}

export default PageNotFound