import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ImageCarousel } from "./src/components/ImageCarousel";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageCarousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});
