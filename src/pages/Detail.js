import React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import useFetch from "../hooks/useFetch";
import Error from "../components/Error";
import Loading from "../components/Loading";


const deviceSize = Dimensions.get("window");
export default function Detail({route}){
  const{id} = route.params
  const {loading, error, data} = useFetch("https://fakestoreapi.com/products"+"/"+id)
  if (error){
    return(
      <Error/>
    )
  }
  if(loading){
    return <Loading/>
  }
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:data.image}}/>
      <View style={styles.budy_container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.fiyat}>{data.price} TL</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },

  budy_container:{
    padding:20,
  },
  title:{
    fontWeight:"bold",
    fontSize:40
  },

  image:{
    width:deviceSize.width,
    height: deviceSize.height/3,
    resizeMode:"contain"
  },

  desc:{
    fontStyle:"italic"
  },

  fiyat:{
    fontSize:30,
    textAlign:"right"
  }

});
