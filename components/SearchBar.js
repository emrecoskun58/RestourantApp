import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Inter_300Light } from '@expo-google-fonts/inter'; 

export default function SearchBar() {
    let [fontsLoaded, fontError] = useFonts({
        Inter_300Light,
      });
      if (!fontsLoaded && !fontError) {
        return null;
      }
  return (
    <View style={styles.bacgkroundStyle}>
      <AntDesign name="search1" size={30} color="black" style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder='Aramak istediğiniz kelimeyi giriniz..' autoCorrect={false} autoCapitalize='none' />
    </View>
  )
}

const styles = StyleSheet.create({
    bacgkroundStyle:{
        backgroundColor:'lightgray',
        flexDirection:'row',
        margin:10,
        height:50,
        alignItems:'center',
        borderRadius:15
    },
    inputStyle:{
        flex:1,
        fontSize:18,
        fontFamily: 'Inter_300Light'
    },
    iconStyle:{
        marginHorizontal:15
    }
})