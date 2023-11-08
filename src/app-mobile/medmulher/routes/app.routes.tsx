import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Register  from "../screens/Register";
import ButtonReturnLeft from "../components/Forms/ButtonReturnLeft";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import { Page } from "../ui/style/style";

const Stack = createNativeStackNavigator();


function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Inicial"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen name="sidebar" component={ButtonNavBar} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
