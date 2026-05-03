import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

export default function Schedule() {
  const router = useRouter();

  const [appointmentType, setAppointmentType] = useState("Consulta");
  const [date, setDate] = useState("20/04/2026");
  const [time, setTime] = useState("8:00");

  const handleConfirm = () => {
    // Aquí podrías guardar la cita en tu backend
    router.replace("/confirm");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda tu cita</Text>

      <Image source={require("../../assets/milo.png")} style={styles.petImage} />
      <Text style={styles.petInfo}>
        nombre: Milo{"\n"}
        tipo: criollo{"\n"}
        edad: 6 meses{"\n"}
        peso: 2 KL
      </Text>

      <Text style={styles.label}>Tipo de cita:</Text>
      <Picker
        selectedValue={appointmentType}
        style={styles.picker}
        onValueChange={(itemValue) => setAppointmentType(itemValue)}
      >
        <Picker.Item label="Consulta" value="Consulta" />
        <Picker.Item label="Vacunación" value="Vacunación" />
        <Picker.Item label="Laboratorio" value="Laboratorio" />
        <Picker.Item label="Desparasitación" value="Desparasitación" />
      </Picker>

      <Text style={styles.label}>Fecha:</Text>
      <Picker
        selectedValue={date}
        style={styles.picker}
        onValueChange={(itemValue) => setDate(itemValue)}
      >
        <Picker.Item label="20/04/2026" value="20/04/2026" />
        <Picker.Item label="21/04/2026" value="21/04/2026" />
        <Picker.Item label="22/04/2026" value="22/04/2026" />
        <Picker.Item label="23/04/2026" value="23/04/2026" />
      </Picker>

      <Text style={styles.label}>Hora:</Text>
      <Picker
        selectedValue={time}
        style={styles.picker}
        onValueChange={(itemValue) => setTime(itemValue)}
      >
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="9:00" value="9:00" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="12:00" value="12:00" />
      </Picker>

      <Pressable style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 20, textAlign: "center" },
  petImage: { width: 100, height: 100, alignSelf: "center", marginBottom: 10 },
  petInfo: { textAlign: "center", marginBottom: 20, color: "#333" },
  label: { fontSize: 16, fontWeight: "600", marginTop: 10, color: "#2E7D32" },
  picker: { backgroundColor: "#fff", marginBottom: 10 },
  confirmButton: { backgroundColor: "#388E3C", paddingVertical: 12, borderRadius: 8, marginTop: 20, alignItems: "center" },
  confirmText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
