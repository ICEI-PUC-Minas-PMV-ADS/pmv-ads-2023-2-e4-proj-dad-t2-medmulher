import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import Home from "../screens/Home";
import RedefinePassword from "../screens/RedefinePassword";
import PersonalInfo from "../screens/PersonalInfo";
import Login from "../screens/Login";
import { Profile } from "../screens";

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
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Informacoes Pessoais"
        component={PersonalInfo}
      />
      <Stack.Screen name="sidebar" component={ButtonNavBar} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
