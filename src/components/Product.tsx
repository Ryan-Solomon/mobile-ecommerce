import { FC } from "react";
import { Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import React from "react";

type TProps = {
  image: string;
  title: string;
  rating: string;
  price: string;
};

export const Product: FC<TProps> = ({ image, title, rating, price }) => {
  return (
    <StyledContainer>
      <Image style={styles.image} source={{ uri: image }} />
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledRating>{rating} ratings</StyledRating>
        <StyledPrice>From ${price}</StyledPrice>
      </StyledTextContainer>
    </StyledContainer>
  );
};

const StyledTextContainer = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px;
  flex-shrink: 1;
`;

const StyledContainer = styled.View`
  flex-direction: row;
  margin: 10px;
  flex: 1;
`;

const StyledTitle = styled.Text``;

const StyledRating = styled.Text``;

const StyledPrice = styled.Text``;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});
