import React, { useRef } from "react";
import { View, Text, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import products from "../data/products";

export const ImageCarousel = () => {
  const carouselRef = useRef("carousel");
  const renderItem = ({ item }: { item: any }) => (
    <View
      style={{
        backgroundColor: "floralwhite",
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <Image source={{ uri: item.image }} />
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      ref={carouselRef.current}
      data={products}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};
