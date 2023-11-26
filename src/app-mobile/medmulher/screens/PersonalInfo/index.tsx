import React, { useState } from "react";
import { useUserContext, UserProvider } from "../../context/userContext";

//Components
import { Form, Title } from './style';
import ButtonSecundary from "../../components/Forms/ButtonSecundary";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import Spacer from "../../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import { IUser } from "../../ui/interfaces";
import { ViewContainer } from "../../ui/style/style";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";
import ButtonSecundary50 from "../../components/Forms/ButtonSecundary50";
import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
import { patchUsers } from "../../services/api";

const PersonalInfo = ({ navigation }) => {
  const { user } = useUserContext();
  const [userActual, setUserActual] = useState<IUser>({
    id: user[0]._id,
    name: user[0].name,
    email: user[0].email,
    password: "**********",
    fullName: user[0].fullName,
    cpf: user[0].cpf,
    dateOfBirth: user[0].dateOfBirth,
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
      alert('Falha ao atualizar dados');
      return error.message;
    }
  }


return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
    <ViewContainer>
      <Spacer margin={"sx"} />

        <Form>
            <Title>Conta</Title>
            <Label title="Email" />
                <Input
                placeholder={userActual.email}
                onChangeText={(ev) =>
                  setUserActual((old) => {
                    return { ...old, email: ev };
                    })
                }
                
                />
        <Spacer margin="xx" />
        <Label title="Senha" />
        <Input
          placeholder={userActual.password}
          onChangeText={(ev) =>
            setUserActual((old) => {
              return { ...old, password: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Title>Pessoal</Title>
        <Spacer margin="ms" />
        <Label title="Nome completo" />
        <Input
          placeholder={userActual.fullName}
          onChangeText={(ev) =>
            setUserActual((old) => {
              return { ...old, fullName: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Label title="Data de nascimento" />
        <Input
          placeholder={userActual.dateOfBirth}
          onChangeText={(ev) =>
            setUserActual((old) => {
              return { ...old, dateOfBirth: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Label title="CPF" />
        <Input
          placeholder={userActual.cpf}
          onChangeText={(ev) =>
            setUserActual((old) => {
              return { ...old, cpf: ev };
            })
          }
        />

        <Spacer margin="xx" />
        <View style = {{flexDirection: 'row', justifyContent: 'space-between' }}>
            
            <ButtonSecundary50 title="Cancelar" onPress={() => navigation.navigate("Profile")} />
            <ButtonPrimary50 title="Cadastrar" onPress={submitForm} />
        </View>
      </Form>
    </ViewContainer>
    <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
    
);

}

export default PersonalInfo;
