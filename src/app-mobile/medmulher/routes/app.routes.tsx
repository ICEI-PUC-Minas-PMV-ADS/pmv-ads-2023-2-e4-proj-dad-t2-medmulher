import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonReturnLeft from "../components/Forms/ButtonReturnLeft";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import { Page } from "../ui/style/style";
import RedefinePassword from "../screens/RedefinePassword";
import PersonalInfo from "../screens/PersonalInfo";
import Login from "../screens/Login";

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
      <Stack.Screen name="sidebar" component={ButtonNavBar} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
