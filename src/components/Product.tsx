import { FC } from 'react'
import {Image} from 'react-native'
import styled from 'styled-components/native'

type TProps = {
    image: any;
    title: string;
    rating: string;
    price: string;
}

export const Product:FC<TProps> = ({image, title, rating, price}) => {
    return (
        <>
        <Image source={image} />
        <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledRating>{rating}</StyledRating>
        <StyledPrice>{price}</StyledPrice>
        </StyledTextContainer> 
        </>
     )
}

const StyledTextContainer = styled.View`
flex-direction: column;
`


const StyledTitle = styled.Text`
    
`

const StyledRating = styled.Text`
 
`

const StyledPrice = styled.Text`
 
`