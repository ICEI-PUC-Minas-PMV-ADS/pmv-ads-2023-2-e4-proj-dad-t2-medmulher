import React from "react";

//Style
import { LogoContainer, ViewContainer } from "../../ui/style/style";
import { Header, Form, SubTitle } from "./style";


//Components
import ButtonSecundary from "../../components/Forms/ButtonSecundary";

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import Spacer from "../../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";

//Icons
import Icon from "@expo/vector-icons/Ionicons";
import { useUserContext } from "../../context/userContext";
import { deleteUsers } from "../../services/api";

function Profile({ navigation }) {
  const {user} = useUserContext()
  
  async function removeUser() {
    const response = await deleteUsers(user.id);

    if(response === "success delete"){
      alert("Usuário deletado com sucesso!");
      return navigation.reset({
        index: 0,
        routes: [{ name: "Inicial" }],
      })
    }

    alert("Ocorreu um erro ao tentar deletar seu usuário.")
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <Spacer margin="xx" />

        <Header>
          <Text>{"\n"}</Text>
          <Icon name="person" size={100} color="#8D4698" />
        </Header>

        <Spacer margin="xx" />
        <ButtonSecundary
          title="Minhas consultas"
          onPress={() => navigation.navigate("Consultas")}
          style={{ marginRight: 5, borderBlockColor: "#8D4698", borderLeftColor: "#8D4698", borderRightColor: "#8D4698"}}
          
        />

        <Form>
          <Text>{"\n\n"}</Text>
          <SubTitle>Conta {"\n"} </SubTitle>

          <TouchableOpacity
            onPress={() => navigation.navigate("PersonalInfo")}
          >
            <Text>Informações Pessoais</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={removeUser}
          >
            <Text>Deletar conta</Text>
          </TouchableOpacity>

          <Spacer margin="xx" />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingBottom: 44,
            }}
          >
            <ButtonSecundary
              title="Sair da conta"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Inicial" }],
                })
              }
              style={{ marginRight: 5, borderBlockColor: "#8D4698", borderLeftColor: "#8D4698", borderRightColor: "#8D4698" }}
            />
          </View>
        </Form>
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Profile;
