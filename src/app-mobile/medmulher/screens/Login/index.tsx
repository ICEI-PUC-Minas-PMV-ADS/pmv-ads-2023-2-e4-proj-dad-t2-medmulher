import React, { useState } from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { LogoContainer, ViewContainer } from "../../ui/style/style";
import { getUsers, postLogin } from "../../services/api";
import { useUserContext } from "../../context/userContext";

import {
  Header,
  Form,
  ForgotPassword,
  Register,
  OrContainer,
  OrLine,
  OrTitle,
} from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { IAuth } from "../../ui/interfaces";

function Login({ navigation }) {
  const { setUser } = useUserContext();
  const [login, setLogin] = useState<IAuth>({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    if (!login.email || !login.password) {
      return alert("Por favor, preencha todos os campos.");
    }

    const auth = await postLogin(login);

    if (auth.status === 200) {
      const users = await getUsers();
      const user = users.filter((el) => el.email === login.email);
      setUser(user);

      return navigation.navigate("Home");
    }

    alert("Usuário ou senha incorretos!");
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <Spacer margin="xx" />
        <Spacer margin="xx" />
        <Header>
          <LogoContainer
            source={require("../../assets/Logo-rosa.png")}
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
          />
        </Header>

        <Spacer margin="xx" />
        <Form>
          <Label title="E-mail" />
          <Input
            placeholder="E-mail"
            onChangeText={(ev) =>
              setLogin((old) => {
                return { ...old, email: ev };
              })
            }
          />
          <Spacer margin="xx" />

          <Label title="Senha" />
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(ev) =>
              setLogin((old) => {
                return { ...old, password: ev };
              })
            }
          />

          <ForgotPassword onPress={() => navigation.navigate("Esqueceu Senha")}>
            Esqueci minha senha
          </ForgotPassword>

          <Spacer margin="xx" />
          <ButtonPrimary title="Entrar" onPress={loginUser} />
        </Form>
        <Spacer margin="xx" />

        <OrContainer>
          <OrLine></OrLine>
          <OrTitle> ou </OrTitle>
          <OrLine></OrLine>
        </OrContainer>
        <Spacer margin="ms" />

        <Register onPress={() => navigation.navigate("Register")}>
          Ainda não tem conta? Cadastre-se
        </Register>
      </ViewContainer>
    </SafeAreaView>
  );
}

export default Login;
