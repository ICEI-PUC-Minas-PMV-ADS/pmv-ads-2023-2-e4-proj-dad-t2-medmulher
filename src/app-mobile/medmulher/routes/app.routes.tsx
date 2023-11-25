import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import Login from "../screens/Login";
import Home from "../screens/Home";
import RedefinePassword from "../screens/RedefinePassword";
import Schedulling from "../screens/Schedulling";


const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Inicial"
        component={Schedulling}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Recuperar senha"
        component={RedefinePassword}
      />
      <Stack.Screen name="sidebar" component={ButtonNavBar} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
