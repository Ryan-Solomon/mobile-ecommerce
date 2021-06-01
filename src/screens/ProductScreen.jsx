import { View } from "react-native"
import { Product } from "../components/Product"
import products from '../data/products'

export const ProductScreen = () => {
    return (
        <View>
            {
                products.map((product) => (
                    <Product 
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