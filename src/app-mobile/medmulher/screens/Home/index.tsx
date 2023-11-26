import React from 'react'
import { Header, Card, SubTitle, Title } from "./style";
import { TouchableOpacity, } from 'react-native';
import Spacer from "../../components/Spacer";
import { LogoContainer, ViewContainer } from "../../ui/style/style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

function Home({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, alignItems: 'center' }}>
            <ViewContainer>

                <Header>
                    <LogoContainer
                        source={require('../../assets/Logo-rosa-row.png')}
                        style={{ width: 200, height: 95 }}
                        resizeMode="contain"
                    />
                </Header>

                <Spacer margin="xx" />
                <Title>
                    Bem-vinda ao MedMulher!
                </Title>

                <Spacer margin="xx" />
                <TouchableOpacity>
                    <Card onPress={() => navigation.navigate("Minhas Consultas")}>
                        <Title>Minhas consultas</Title>
                        <SubTitle>Acesse suas consultas passadas e futuras.</SubTitle>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Card onPress={() => navigation.navigate("Agendar Consulta")}>
                        <Title>Agendar consulta</Title>
                        <SubTitle>Agende uma nova consulta com nossos especialistas.</SubTitle>
                    </Card>
                </TouchableOpacity>
            </ViewContainer>
            <ButtonNavBar navigation={navigation} />
        </SafeAreaView>
    );
}

export default Home;
