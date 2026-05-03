import React from "react";
import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";

// Definimos el tipo de cita
type Appointment = {
  id: string;
  fecha: string;
  tipo: string;
  estado: "Confirmada" | "Pendiente" | "Cancelada";
};

export default function Appointments() {
  // Ejemplo de citas programadas
  const appointments: Appointment[] = [
    { id: "1", fecha: "10 Mayo 2026", tipo: "Consulta general", estado: "Confirmada" },
    { id: "2", fecha: "15 Mayo 2026", tipo: "Vacunación", estado: "Pendiente" },
    { id: "3", fecha: "20 Mayo 2026", tipo: "Control de peso", estado: "Cancelada" },
  ];

  const renderItem: ListRenderItem<Appointment> = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.fecha}</Text>
      <Text style={styles.type}>{item.tipo}</Text>
      <Text
        style={[
          styles.status,
          item.estado === "Confirmada"
            ? styles.confirmed
            : item.estado === "Pendiente"
            ? styles.pending
            : styles.cancelled,
        ]}
      >
        {item.estado}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas Programadas</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 20 },
  card: { backgroundColor: "#fff", borderRadius: 8, padding: 15, marginBottom: 12 },
  date: { fontSize: 16, fontWeight: "bold", color: "#2E7D32" },
  type: { fontSize: 14, color: "#555", marginTop: 4 },
  status: { fontSize: 14, marginTop: 6, fontWeight: "600" },
  confirmed: { color: "#2E7D32" },
  pending: { color: "#FF9800" },
  cancelled: { color: "#D32F2F" },
});
