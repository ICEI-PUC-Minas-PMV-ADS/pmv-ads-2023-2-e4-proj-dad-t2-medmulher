import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonNavBar from "../components/Forms/ButtonNavBar";
import {
  Home,
  Login,
  MyConsultation,
  PersonalInfo,
  Profile,
  RedefinePassword,
  Register,
  Schedulling,
} from "../screens";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Minhas Consultas" component={MyConsultation} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recuperar senha" component={RedefinePassword} />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{
          headerTitle: "Informações Pessoais",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Perfil",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "Registrar Usuário",
        }}
      />
      <Stack.Screen name="Informacoes Pessoais" component={PersonalInfo} />
      <Stack.Screen name="Agendamento" component={Schedulling} />
      <Stack.Screen name="sidebar" component={ButtonNavBar} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
