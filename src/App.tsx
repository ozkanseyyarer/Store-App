import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Products from "./pages/Products";
import Detail from "./pages/Detail";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"ProductsPage"} component={Products}
        options={{
          title:"Store App",
          headerStyle:{backgroundColor:"#34abfa"},
          headerTitleStyle:{color:"#ffffff",fontWeight: "bold"},
          headerTitleAlign: "center"
        }}
        />
        <Stack.Screen name={"DetailPAge"} component={Detail}
         options={{
          title:"Detail",
          headerStyle:{backgroundColor:"#34abfa"},
          headerTitleStyle:{color:"#ffffff",fontWeight: "bold"},
          headerTitleAlign: "center",
          headerTintColor:"white"
        }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


