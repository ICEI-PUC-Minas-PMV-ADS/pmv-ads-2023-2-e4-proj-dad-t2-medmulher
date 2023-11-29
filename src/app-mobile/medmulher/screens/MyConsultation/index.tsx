import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { Title, OrContainer, OrLine, SubTitle, Card } from "./style";

import { getConsultation } from "../../services/api";
import { useUserContext } from "../../context/userContext";

function MyConsultation({ navigation }) {
  const { user } = useUserContext();
  const [consults, setConsults] = useState<any[]>([]);

  async function getConsult() {
    const val = await getConsultation();

    if (val) {
      const cons = val.filter((el) => el.patient_id === user[0]._id);
      setConsults(cons);
      return;
    }
    return "server error 500!";
  }

  useEffect(() => {
    getConsult();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer style={{ background: "#fff" }}>
        {consults.map((item, index) => (
          <Card style={{ justifyContent: "space-between", gap: 18 }} key={index}>
            <View style={{ marginBottom: 8 }}>
              <Title style={{ fontWeight: "400" }}>Consulta {item.specialty}</Title>
            </View>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Icon name="calendar" size={20} color="#000" />
              <SubTitle style={{ fontWeight: "400" }}>
                {item.schedulle_date}
              </SubTitle>
            </View>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Icon name="clockcircleo" size={20} color="#000" />
              <SubTitle style={{ fontWeight: "400" }}>
                {item.hour}
              </SubTitle>
            </View>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Icon name="user" size={20} color="#000" />
              <SubTitle style={{ fontWeight: "400" }}>
                Dr. {item.name}
              </SubTitle>
            </View>
          </Card>
        ))}

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
  );
}
export default MyConsultation;
