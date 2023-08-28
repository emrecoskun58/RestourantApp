import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.textView}>
        <Text>
          <AntDesign name="star" size={14} color="gold" /> {result.rating}{" "}
          Yıldızlı Restoran,{" "}
          <AntDesign name="book" size={14} color="green" />{" "}
          {result.review_count} Değerlendirme
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  textView: {
    flexDirection:'row',
    alignItems:'center',
  },
});
