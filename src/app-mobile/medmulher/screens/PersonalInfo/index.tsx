import React, { useState } from "react";
import { useUserContext } from "../../context/userContext";


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
import { IUser } from "../../ui/interfaces";
import { ViewContainer } from "../../ui/style/style";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import Label from "../../components/Forms/Label";
import Input from "../../components/Forms/Input";
import { Form } from "./style";
import ButtonSecundary50 from "../../components/Forms/ButtonSecundary50";
import ButtonPrimary50 from "../../components/Forms/ButtonPrimary50";
import { patchUsers } from "../../services/api";


const PersonalInfo = ({navigation}) => {

    //const {user, setUser} = useUserContext()
    const [user, setUser] = useState<IUser>({
        id: 0,
        name: "teste01",
        email: "teste01@email.com",
        password: "1234",
        fullName: "teste da silva",
        cpf: "123.456.789-00",
        dateOfBirth: "12/12/2012",
        address: {
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          estado: "",
          cep: ""
        },
        sale: true,
      });

    async function submitForm() {
        try{
            const response = await patchUsers(user.id, user)
        } catch (error){
            return error.message;
        }
        

        // user.sale = option;
        // const response = await getUsers();
        // if (response.length > 0) {
        //   for (let i = 0; i < response.length; i++) {
        //     if (user.email === response[i].email) {
        //       alert("email já cadastrado!");
        //       return false;
        //     }
        //   }
        // }
    }
    


return (
    <ViewContainer>
        <Spacer margin={"sx"} />

        <Form>
            <p>Conta</p>
            <Label title="Email" />
                <Input
                placeholder={user.email}
                onChangeText={(ev) =>
                    setUser((old) => {
                    return { ...old, email: ev };
                    })
                }
                />
        <Spacer margin="xx" />
        <Label title="Senha" />
        <Input
          placeholder={user.password}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, password: ev };
            })
          }
        />
        <Spacer margin="xx"/>
        <p>Pessoal</p>
        <Label title="Nome completo" />
        <Input
          placeholder={user.fullName}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, fullName: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Label title="Data de nascimento" />
        <Input
          placeholder={user.dateOfBirth}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, dateOfBirth: ev };
            })
          }
        />
        <Spacer margin="xx" />
        <Label title="CPF" />
        <Input
          placeholder={user.cpf}
          onChangeText={(ev) =>
            setUser((old) => {
              return { ...old, cpf: ev };
            })
          }
        />
               
        <Spacer margin="xx" />
        <View style = {{flexDirection: 'row', justifyContent: 'space-between' }}>
            
            <ButtonSecundary50 title="Cancelar" onPress={submitForm} />
            <ButtonPrimary50 title="Cadastrar" onPress={submitForm} />
        </View>
        
      </Form>

    </ViewContainer>
    
);

}

export default PersonalInfo;