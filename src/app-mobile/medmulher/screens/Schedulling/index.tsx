import { useState } from "react";
import {
  Button,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import {
  DATA,
  dates,
  day,
  dayConvert,
  hours,
  listDays,
  monthConvert,
} from "./data.mock";
import { useUserContext } from "../../context/userContext";
import { ViewContainer } from "../../ui/style/style";
import ButtonPrimary from "../../components/Forms/ButtonPrimary";
import { createConsult } from "../../services/api";

function Schedulling({ navigation }) {
  const { doctorList, doctorSpecialty, user } = useUserContext();
  const [open, setOpen] = useState(false);
  const [openDc, setOpenDc] = useState(false);
  const [openMt, setOpenMt] = useState(false);
  const [openDy, setOpenDy] = useState(false);
  const [openDt, setOpenDt] = useState(false);

  const [value, setValue] = useState("");
  const [valueDc, setValueDc] = useState("");
  const [valueMt, setValueMt] = useState("");
  const [valueDay, setValueDay] = useState("");
  const [valueDt, setValueDt] = useState("");

  const [docs, setDocs] = useState<any>();
  const [doctor, setDoctor] = useState<any>();
  const [mDays, setMDays] = useState<any>();
  const [hour, setHour] = useState<string>("");

  const months = async () => {
    const mt = DATA.map((el) => {
      return {
        label: el.mounth,
        value: el.mounth,
        id: el.days,
      };
    });
    setDocs(mt);
    return;
  };

  const submitForm = async () => {
    const data = {
      name: doctor.name,
      specialty: doctor.specialty,
      health_status: "Convencional",
      symptoms: "Normal",
      observation: "",
      doctor_id: doctor._id,
      schedulle_date: `2023-${monthConvert(valueMt)}-${valueDay}`,
      day: dayConvert(valueDt),
      patient_id: user[0]._id,
      patient_name: user[0].name,
      hour: hour,
      open: false,
    };

    const response = await createConsult(data);

    if(response.status === 201){
      return  alert("Agendamento efetudo com sucesso!")
    }
    
    return alert("Agendamento não efetudo! Este horário não está disponível!")
  };

  return (
    <ViewContainer>
      <Spacer margin="lx" />
      <Text style={{ fontSize: 16, color: "#404040" }}>
        Selecione a especialidade e o médico
      </Text>

      <Spacer margin="xs" />
      <Label title="Especialidade" />
      <Button
        title={value || "Selecione uma especialidade"}
        onPress={() => setOpen(!open)}
        color="#7a4183"
      />
      <ScrollView>
        {open && (
          <FlatList
            data={doctorSpecialty}
            renderItem={({ item }) => (
              <Button
                color="#7a4183"
                title={item.value}
                onPress={() => {
                  setValue(item.value.toLowerCase());
                  setOpen(!open);
                }}
              />
            )}
            keyExtractor={(item) => item.label}
          />
        )}
      </ScrollView>
      <Spacer margin="xs" />
      <Label title="Médico" />
      <Button
        title={valueDc || "Selecione um médico"}
        onPress={() => setOpenDc(!openDc)}
        color="#7a4183"
      />
      <ScrollView>
        {openDc && (
          <FlatList
            data={doctorList.filter(
              (el) => el.specialty.toLowerCase() == value
            )}
            renderItem={({ item }) => (
              <Button
                color="#7a4183"
                title={item.name}
                onPress={() => {
                  setDoctor(item);
                  setValueDc(item.name.toLowerCase());
                  setOpenDc(!openDc);
                }}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </ScrollView>
      <Spacer margin="lx" />

      <Text style={{ fontSize: 16, textAlign: "left", color: "#404040" }}>
        Selecione uma data
      </Text>
      <Spacer margin="lx" />

      <Label title="Mês da consulta" />
      <Button
        title={valueMt || "Selecione o mês"}
        onPress={() => setOpenMt(!openMt)}
        color="#7a4183"
      />
      <ScrollView>
        {openMt && (
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Button
                color="#7a4183"
                title={item.mounth}
                onPress={() => {
                  setMDays(dates(item.days));
                  setValueMt(item.mounth.toLowerCase());
                  setOpenMt(!openMt);
                }}
              />
            )}
            keyExtractor={(item) => item.mounth}
          />
        )}
      </ScrollView>
      <Spacer margin="lx" />

      <Label title="Data da consulta" />
      <Button
        title={valueDay || "Selecione a data"}
        onPress={() => setOpenDy(!openDy)}
        color="#7a4183"
      />
      <ScrollView>
        {openDy && (
          <FlatList
            data={mDays}
            renderItem={({ item }) => (
              <Button
                color="#7a4183"
                title={item}
                onPress={() => {
                  setValueDay(item);
                  setOpenDy(!openDy);
                }}
              />
            )}
            keyExtractor={(item) => item}
          />
        )}
      </ScrollView>
      <Spacer margin="lx" />

      <Label title="Dia da consulta" />
      <Button
        title={valueDt || "Selecione o dia"}
        onPress={() => setOpenDt(!openDt)}
        color="#7a4183"
      />
      <ScrollView>
        {openDt && (
          <FlatList
            data={listDays}
            renderItem={({ item }) => (
              <Button
                color="#7a4183"
                title={item}
                onPress={() => {
                  setValueDt(item);
                  setOpenDt(!openDt);
                }}
              />
            )}
            keyExtractor={(item) => item}
          />
        )}
      </ScrollView>
      <Spacer margin="xs" />
      <Label title="Horário da consulta" />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          paddingVertical: 20,
        }}
      >
        {hours.map((hr) => (
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderWidth: 2,
              borderRadius: 8,
              borderColor: "#8D4698",
              width: 66,
              backgroundColor: `${hour === hr ? "#8D4698" : "#FFF"}`,
            }}
            onPress={() => setHour(hr)}
          >
            <Text
              style={{
                color: `${hour === hr ? "#FFF" : "#8D4698"}`,
                textAlign: "center",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {hr}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Spacer margin="xs" />
      <ButtonPrimary title="Agendar" onPress={submitForm} />

      <Spacer margin="xs" />
    </ViewContainer>
  );
}

export default Schedulling;
