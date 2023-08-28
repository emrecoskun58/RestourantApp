import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign } from "@expo/vector-icons";

export default function ResultShowScreen({ route }) {
  const [result, setResult] = useState(null);

  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  const { name, phone, is_closed, photos } = result;
  return (
    <View>
      <Text style={styles.title}>{name}</Text>

      <Text style={{ alignSelf: "center" }}>
        {is_closed ? (
          <>
            <View style={styles.isClosedView}>
              <AntDesign
                style={{ marginLeft: 5 }}
                name="checkcircleo"
                size={24}
                color="darkgreen"
              />
              <Text style={styles.isCloseText}>Restoran Açık</Text>
              <Text style={styles.phone}>{phone}</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.isClosedView}>
              <AntDesign
                style={{ marginLeft: 5 }}
                name="closecircle"
                size={24}
                color="red"
              />
              <Text style={styles.isCloseText}>Restoran Kapalı</Text>
            </View>
          </>
        )}
      </Text>
      <FlatList
        data={photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 25,
  },
  phone: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 5,
  },
  image: {
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  isClosedView: {
    flexDirection: "row",
    alignItems: "center",
  },
  isCloseText: {
    fontSize: 24,
  },
});
