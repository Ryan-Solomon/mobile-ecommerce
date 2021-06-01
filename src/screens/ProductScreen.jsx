import { View } from "react-native"
import { Product } from "../components/Product"
import products from '../data/products'
import React from 'react'

export const ProductScreen = () => {
    return (
        <View>
            {
                products.map((product) => (
                    <Product 
                    key={product.id}
                    image={product.image} 
                    title={product.title} 
                    rating={product.ratings} 
                    price={product.price}  
                    />
                ))
            }
        </View>
    )
}