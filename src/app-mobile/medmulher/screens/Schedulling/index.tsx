import { useState } from "react";
import { Button, FlatList, Text, View, TouchableOpacity } from "react-native";
import Label from "../../components/Forms/Label";
import Spacer from "../../components/Spacer";
import { DATA, dates, day, hours, listDays } from "./data.mock";
import { useUserContext } from "../../context/userContext";
import { ViewContainer } from "../../ui/style/style";

function Schedulling({ navigation }) {
  const { doctorList, doctorSpecialty } = useUserContext();
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
  const [month, setMonth] = useState<any>();
  const [doctor, setDoctor] = useState<any>();
  const [convertDay, setConvertDay] = useState("");
  const [mDays, setMDays] = useState<any>();
  const [hour, setHour] = useState<any>([]);

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
      <View>
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
      </View>
      <Spacer margin="xs" />
      <Label title="Médico" />
      <Button
        title={valueDc || "Selecione um médico"}
        onPress={() => setOpenDc(!openDc)}
        color="#7a4183"
      />
      <View>
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
                  setConvertDay("");
                  if (item.consultation_date.length > 0) {
                    const d = day(item.consultation_date[0].day);
                    setConvertDay(d);
                  }
                  setDoctor(item);
                  setValueDc(item.name.toLowerCase());
                  setOpenDc(!openDc);
                }}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </View>
      <Text>
        {convertDay
          ? `O Dr. ${doctor.name} só atende nos seguintes dias da semana: ${convertDay}`
          : ""}
      </Text>
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
      <View>
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
      </View>
      <Spacer margin="lx" />

      <Label title="Data da consulta" />
      <Button
        title={valueDay || "Selecione a data"}
        onPress={() => setOpenDy(!openDy)}
        color="#7a4183"
      />
      <View>
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
      </View>
      <Spacer margin="lx" />

      <Label title="Dia da consulta" />
      <Button
        title={valueDt || "Selecione o dia"}
        onPress={() => setOpenDt(!openMt)}
        color="#7a4183"
      />
      <View>
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
      </View>
      <Spacer margin="xs" />
      <Label title="Horário da consulta" />
      <View style={{flexDirection: "row", flexWrap: "wrap", gap: 16, justifyContent: "space-between", paddingVertical: 20}}>
        {hours.map((hr) => (
          <TouchableOpacity
          style={{paddingHorizontal:10, paddingVertical: 10, borderWidth: 2, borderRadius: 8, borderColor: "#8D4698", width: 66}}
          onPress={() => { 
            setHour((old) => ({ ...old, hr}))
            }}>
            <Text style={{ color: "#8D4698", textAlign: "center", fontSize: 14, fontWeight: "500"}}>{hr}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Spacer margin="xs" />

    </ViewContainer>
  );
}

export default Schedulling;
