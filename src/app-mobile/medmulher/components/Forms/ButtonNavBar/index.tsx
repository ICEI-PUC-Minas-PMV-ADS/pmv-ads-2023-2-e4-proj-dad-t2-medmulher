import React from "react";

//Components
import { View, Text, TouchableOpacity } from "react-native";
import Label from "../Label";
import { NavBar } from "./style";

//Icons
import Icon from '@expo/vector-icons/Ionicons';

function ButtonNavBar(props) {
  return (
    <NavBar>
      <TouchableOpacity style={{alignItems:"center"}} onPress={() => props.navigation.navigate("Home")}>
        <Icon name="home" size={30} color="#767676"/>
        <Label title="Home" />
      </TouchableOpacity>
      <TouchableOpacity  style={{alignItems:"center"}}>
        <Icon name="calendar" size={30} color="#767676" />
        <Label title="Agendar" />
      </TouchableOpacity>
      <TouchableOpacity  style={{alignItems:"center"}} onPress={() => props.navigation.navigate("Perfil")}>
        <Icon name="person" size={30} color="#767676" />
        <Label title="Perfil" />
      </TouchableOpacity>
    </NavBar>
  );
}

export default ButtonNavBar;
