import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";

export default function Schedule() {

  // 🔥 recibir mascota desde pets
  const { petId } = useLocalSearchParams();
  const mascotaId = Number(petId);

  const [appointmentType, setAppointmentType] = useState("Consulta");
  const [date, setDate] = useState("20/04/2026");
  const [time, setTime] = useState("8:00");

  const [mascotas, setMascotas] = useState<any[]>([]);
  const [selectedMascota, setSelectedMascota] = useState(0);

  // 🔹 OBTENER MASCOTAS
  const obtenerMascotas = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      const user = JSON.parse(userData!);

      const response = await fetch("http://192.168.0.23/vetcitas_api/api/mascotas/read.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usuario_id: user.id
        })
      });

      const data = await response.json();
      setMascotas(data);

      // 🔥 seleccionar automáticamente
      if (data.length > 0) {
        if (mascotaId) {
          setSelectedMascota(mascotaId);
        } else {
          setSelectedMascota(data[0].id);
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 CREAR CITA
  const handleConfirm = async () => {
    try {
      const [day, month, year] = date.split("/");
      const fechaFormateada = `${year}-${month}-${day} ${time}:00`;

      const userData = await AsyncStorage.getItem("user");
      const user = JSON.parse(userData!);

      const response = await fetch("http://192.168.0.23/vetcitas_api/api/citas/create.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fecha: fechaFormateada,
          motivo: appointmentType,
          mascota_id: selectedMascota, // 🔥 usa la seleccionada
          usuario_id: user.id
        })
      });

      const data = await response.json();

      if (data.message === "Cita creada") {
        Alert.alert("Éxito", "Cita guardada");
      } else {
        Alert.alert("Error", "No se pudo guardar");
      }

    } catch (error) {
      console.log(error);
      Alert.alert("Error de conexión");
    }
  };

  useEffect(() => {
    obtenerMascotas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Cita</Text>

      {/* 🔥 SELECTOR DE MASCOTA */}
      <Text style={styles.label}>Mascota</Text>
      <Picker
        selectedValue={selectedMascota}
        onValueChange={(itemValue) => setSelectedMascota(itemValue)}
      >
        {mascotas.map((m) => (
          <Picker.Item key={m.id} label={m.nombre} value={m.id} />
        ))}
      </Picker>

      <Text style={styles.label}>Tipo</Text>
      <Picker selectedValue={appointmentType} onValueChange={setAppointmentType}>
        <Picker.Item label="Consulta" value="Consulta" />
        <Picker.Item label="Vacunación" value="Vacunación" />
      </Picker>

      <Text style={styles.label}>Fecha</Text>
      <Picker selectedValue={date} onValueChange={setDate}>
        <Picker.Item label="20/04/2026" value="20/04/2026" />
        <Picker.Item label="21/04/2026" value="21/04/2026" />
      </Picker>

      <Text style={styles.label}>Hora</Text>
      <Picker selectedValue={time} onValueChange={setTime}>
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="9:00" value="9:00" />
      </Picker>

      <Pressable style={styles.btn} onPress={handleConfirm}>
        <Text style={styles.btnText}>Guardar cita</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8F5E9"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },
  label: {
    marginTop: 10,
    fontWeight: "600"
  },
  btn: {
    backgroundColor: "#2E7D32",
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold"
  }
});