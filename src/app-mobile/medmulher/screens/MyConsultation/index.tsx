import React, { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View } from 'react-native';
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { Title, OrContainer, OrLine, SubTitle, Card } from "./style";

import { getConsultation } from "../../services/api";
import { IConsultation } from "../../ui/interfaces";


function MyConsultation({ navigation }) {



    /*const { consult, setConsult} = useConsultContext();
    const [dadosConsul, setDadosConsul] = useState<IConsultation>({
        nameDoctor: consult[0].nameDoctor,
        specialty: consult[0].specialty,
        schedulle_date: consult[0].schedulle_date,
        hour: consult[0].hour,
    });*/


    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <ViewContainer style={{ background: "#fff" }}>

                <Card style={{ justifyContent: "space-between", gap: 18 }}>
                    <View style={{ marginBottom: 8 }}>
                        <Title style={{ fontWeight: "400" }}>Consulta {dadosConsul.specialty}</Title>
                    </View>
                    <View style={{ flexDirection: "row", gap: 8, }}>
                        <Icon name="calendar" size={20} color="#000" />
                        <SubTitle style={{ fontWeight: "400" }}>
                            {dadosConsul.schedulle_date}
                        </SubTitle>
                    </View>
                    <View style={{ flexDirection: "row", gap: 8, }}>
                        <Icon name="clockcircleo" size={20} color="#000" />
                        <SubTitle style={{ fontWeight: "400" }}>
                            {dadosConsul.hour}
                        </SubTitle>
                    </View>
                    <View style={{ flexDirection: "row", gap: 8, }}>
                        <Icon name="user" size={20} color="#000" />
                        <SubTitle style={{ fontWeight: "400" }}>
                            Dr. {dadosConsul.nameDoctor}
                        </SubTitle>
                    </View>
                </Card>

                <Spacer margin={"mx"} />

                <OrContainer>
                    <OrLine></OrLine>
                    <OrLine></OrLine>
                </OrContainer>

                <Spacer margin={"mx"} />

            </ViewContainer>

            {/* Menu */}
            <ButtonNavBar navigation={navigation} />
        </SafeAreaView>
    )
}
export default MyConsultation;