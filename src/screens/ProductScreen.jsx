import { View, FlatList } from "react-native"
import { Product } from "../components/Product"
import products from '../data/products'
import React from 'react'
import product from "../data/product"

export const ProductScreen = () => {
    return (
        <View style={{flex:1}} > 
            <FlatList 
            keyExtractor={item => item.id}
            data={products}
            renderItem={({item}) => (
                <Product title={item.title} image={item.image} rating={item.ratings} price={item.price}  />
            )}
            />
        </View>
    )
}