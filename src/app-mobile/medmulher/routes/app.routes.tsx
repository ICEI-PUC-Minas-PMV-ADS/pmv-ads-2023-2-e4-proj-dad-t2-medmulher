import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Register  from "../screens/Register";
import ButtonReturnLeft from "../components/Forms/ButtonReturnLeft";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import { Page } from "../ui/style/style";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();


function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Inicial"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen name="sidebar" component={ButtonNavBar} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
