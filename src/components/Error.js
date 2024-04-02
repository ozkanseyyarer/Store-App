import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";


export default  function Error(){
  return (
    <View style={{flex:1}}>
      <LottieView style={{flex:1}} source={require('../assets/error.json')} autoPlay loop />

    </View>
  )
}
