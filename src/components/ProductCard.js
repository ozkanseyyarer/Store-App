import React from "react";
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";


export default function Products({product, onSelect}){

  return(
    <TouchableWithoutFeedback onPress={onSelect}>
       <View style={styles.container}>
         <Image style={styles.image} source={{uri:product.image}}/>
           <View style={styles.budy_container}>
             <Text style={styles.title}>{product.title}</Text>
             <Text style={styles.price}>{product.price} TL</Text>
           </View>
       </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({

  container:{
    flexDirection:"row",
    backgroundColor:"rgba(47,43,43,0.18)",
    borderColor:"#2d2b2b",
    borderWidth:0.8,
    margin:10
  },

  image:{
    width:100,
    minHeight:100,
    resizeMode:"contain",
    backgroundColor:"white"

  },
  budy_container:{
    flex:1,
    padding:5,
    justifyContent:"space-between"

  },
  title:{
    fontWeight:"bold",
    fontSize:18
  },
  price:{
    textAlign:"right",
    fontSize:16,
    fontStyle:"italic"
  }

});
