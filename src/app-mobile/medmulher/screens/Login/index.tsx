import React, { useState } from "react";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { LogoContainer, ViewContainer } from "../../ui/style/style";

import {
  Header,
  Form,
  ForgotPassword,
  Register,
  OrContainer,
  OrLine,
  OrTitle
} from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import axios from 'axios';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
      const loginUser = async () => {
        try {
          const response = await axios.post('http://localhost:3000/login', { email, password });
    
          if (response.status === 200) {
            navigation.navigate('Home');
          } else {
            console.error('Erro no login');
          }
        } catch (error) {
          console.error('Erro no login', error);
        }
      };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <Spacer margin="xx" />
        <Spacer margin="xx" />
        <Header>
          <LogoContainer
            source={require('../../assets/Logo-rosa.png')}
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
          />
        </Header>

        <Spacer margin="xx" />
        <Form>
          <Label title="E-mail" />
          <Input
            value={email}
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
          />
          <Spacer margin="xx" />

          <Label title="Senha" />
          <Input
            value={password}
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />

          <ForgotPassword
            onPress={() => navigation.navigate("Esqueceu Senha")}
          >
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

        <Register
          onPress={() => navigation.navigate("Register")}
        >
          Ainda não tem conta? Cadastre-se
        </Register>
      </ViewContainer>
    </SafeAreaView>
  );
}

export default Login;