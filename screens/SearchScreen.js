import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [seacrhApi, results] = useResult();
  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };


  return (
    <ScrollView>
      <SearchBar />
      <ResultList title="Ucuz Restoranlar" results={filterResultByPrice("₺")} />
      <ResultList
        title="Uygun Restoranlar"
        results={filterResultByPrice("₺₺")}
      />
      <ResultList
        title="Pahalı Restoranlar"
        results={filterResultByPrice("₺₺₺")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
