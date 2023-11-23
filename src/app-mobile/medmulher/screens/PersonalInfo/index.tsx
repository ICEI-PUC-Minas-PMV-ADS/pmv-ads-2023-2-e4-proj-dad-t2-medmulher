import React, { useState } from "react";
import { useUserContext } from "../../context/userContext";

//Components
import ButtonSecundary from "../../components/Forms/ButtonSecundary";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import Spacer from "../../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import { IUser } from "../../ui/interfaces";
import { ViewContainer } from "../../ui/style/style";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";
import { Form } from "./style";
import ButtonSecundary50 from "../../components/Forms/ButtonSecundary50";
import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
import { patchUsers } from "../../services/api";

const PersonalInfo = ({ navigation }) => {
  const {user, setUser} = useUserContext()
  const [userActual, setUserActual] = useState<IUser>({
    id: user.id || 0,
    name: user.name || "",
    email: user.email || "",
    password: user.password || "",
    fullName: user.fullName || "",
    cpf: user.cpf || "",
    dateOfBirth: user.dateOfBirth || "",
    address: {
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
    },
    sale: true,
  });

  async function submitForm() {
    try {
      const response = await patchUsers(userActual.id, userActual);
      if (response) {
        alert("Dados alterados com sucesso!");
        return navigation.navigate("Profile");
      }
    } catch (error) {
      return error.message;
    }
  }

  return (
    <ViewContainer>
      <Spacer margin={"sx"} />

      <Form>
        <Text>Conta</Text>
        <Label title="Email" />
        <Input
          placeholder={userActual.email}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, email: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Label title="Senha" />
        <Input
          placeholder={userActual.password}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, password: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Text>Pessoal</Text>
        <Spacer margin="ms" />
        <Label title="Nome completo" />
        <Input
          placeholder={userActual.fullName}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, fullName: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Label title="Data de nascimento" />
        <Input
          placeholder={userActual.dateOfBirth}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, dateOfBirth: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Label title="CPF" />
        <Input
          placeholder={userActual.cpf}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, cpf: ev };
            })
          }
        />

        <Spacer margin="xx" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ButtonSecundary50 title="Cancelar" onPress={submitForm} />
          <ButtonPrimary50 title="Cadastrar" onPress={submitForm} />
        </View>
      </Form>
    </ViewContainer>
  );
};

export default PersonalInfo;
