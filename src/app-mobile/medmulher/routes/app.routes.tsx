import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import Login from "../screens/Login";
import Home from "../screens/Home";
import RedefinePassword from "../screens/RedefinePassword";
import { Register } from "../screens";
import Profile from "../screens/Profile";


const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Inicial"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Recuperar senha"
        component={RedefinePassword}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen name="sidebar" component={ButtonNavBar} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
