import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const { 
        query: { id }
    } = useRouter();
    return (
        <div>
            <p>Página del producto: {id}</p>
        </div>
    )
}

export default ProductItem