import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ProductScreen } from "./src/screens/ProductScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductScreen />
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
