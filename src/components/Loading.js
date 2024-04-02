import React from "react";
import LottieView from 'lottie-react-native';
import { View } from "react-native";

export default  function Loading(){
  return (
    <View style={{flex:1}}>
      <LottieView style={{flex:1}} source={require('../assets/loading2.json')} autoPlay loop />

    </View>
  )
}
