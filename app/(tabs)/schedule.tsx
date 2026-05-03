import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Definimos la interfaz de cita según tu base de datos
interface Cita {
  id: string;
  fecha: string;
  motivo: string;
  mascota_nombre: string;
  usuario_nombre: string;
}

export default function Schedule() {
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.23/vetcitas_api/api/citas/read.php") // usa tu IP local
      .then((res) => res.json())
      .then((data: Cita[]) => {
        // Validamos que sea un array
        if (Array.isArray(data)) {
          setCitas(data);
        } else {
          console.error("Respuesta inesperada:", data);
        }
      })
      .catch((err) => console.error("Error al cargar citas:", err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas Programadas</Text>
      {citas.length === 0 ? (
        <Text style={styles.empty}>No hay citas registradas</Text>
      ) : (
        <FlatList
          data={citas}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.mascota_nombre}</Text>
              <Text>Dueño: {item.usuario_nombre}</Text>
              <Text>Fecha: {item.fecha}</Text>
              <Text>Motivo: {item.motivo}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  empty: { fontSize: 16, color: "#666", textAlign: "center", marginTop: 20 },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  name: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
});
