import React, { useState } from 'react';
import ButtonPrimary from '../../components/Forms/ButtonPrimary';
import Input from '../../components/Forms/Input';
import Label from '../../components/Forms/Label';
import Spacer from '../../components/Spacer';
import { ViewContainer } from '../../ui/style/style';
import { getUsers, resetPassword } from '../../services/api';
import { Form, SubTitle } from './style';
import { IUser } from '../../ui/interfaces';
import { checkEmail, checkPass } from '../../utils/validators';
import { TouchableOpacity, Text } from 'react-native';

function RedefinePassword({ navigation }) {
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [user, setUser] = useState<IUser>({
    email: '',
    password: '',
  });

  async function submitForm() {
    try {
      const response = await getUsers();

      if (response.length > 0) {
        const existingUser = response.find((u) => u.email === user.email);

        if (existingUser) {
          const resetResponse = await resetPassword(user.email, user.password);

          if (resetResponse.auth) {
            alert('Senha redefinida com sucesso!');
            navigation.navigate('Login');
          } else {
            alert('Erro ao redefinir a senha: ' + resetResponse.message);
          }
        } else {
          alert('Email não cadastrado!');
        }
      }
    } catch (error) {
      console.error('Error getting users:', error);
      alert('Erro ao obter usuários. Por favor, tente novamente.');
    }
  }

  return (
    <ViewContainer>
      <Spacer margin={'sx'} />

      <Form>
        <Spacer margin="xx" />
        <Label title="E-mail" />
        <Input
          placeholder="E-mail"
          onChangeText={(ev) => setUser((old) => ({ ...old, email: ev }))}
        />
        <Spacer margin="xx" />
        <Label title="Nova Senha" />
        <Input
          placeholder="Senha"
          onChangeText={(ev) => setUser((old) => ({ ...old, password: ev }))}
        />
        <Spacer margin="xx" />
        <Label title="Confirmar a senha" />
        <Input placeholder="Confirme a senha" onChangeText={setConfirmPass} />
        <Spacer margin="ls" />

        <Spacer margin="xs" />
        <SubTitle>
          Sua senha deve conter: {"\n"} {"\n"}- Crie uma senha com no mínimo 8
          caracteres {"\n"}- Adicione letra minúsculas {"\n"}- Adicione pelo
          menos uma letra maiúscula {"\n"}- Adicione pelo menos um caractere
          especial
        </SubTitle>

        <Spacer margin="xx" />
        <ButtonPrimary title="Recuperar Senha" onPress={submitForm} />
      </Form>
      <Spacer margin={'xx'} />
    </ViewContainer>
  );
}

export default RedefinePassword;