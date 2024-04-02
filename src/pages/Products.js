import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator, Text } from "react-native";
import ProductCard from "../components/ProductCard"
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";



export default function Products({navigation}){

  const {error,loading,data} = useFetch("https://fakestoreapi.com/products")

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPAge",{id})
  }
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>
  )


  if (error){
    return(
      <Error/>
    )
  }
  if(loading){
    return <Loading/>
  }
  return(
    <FlatList data={data} renderItem={renderProduct}/>
  )
 }

const styles = StyleSheet.create({


});
