import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

interface Cita {
  id: string;
  fecha: string;
  hora: string;
  mascota_nombre: string;
  usuario_nombre: string;
}

export default function Schedule() {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [loading, setLoading] = useState(true);

  const getCitas = async () => {
    try {
      const res = await fetch(
        "http://192.168.0.23/vetcitas_api/api/citas/read.php"
      );

      const data = await res.json();

      if (Array.isArray(data)) {
        setCitas(data);
      } else {
        console.log("Error backend:", data);
        setCitas([]);
      }
    } catch (error) {
      console.error("Error conexión:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCitas();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas Programadas 📅</Text>

      <FlatList
        data={citas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.mascota_nombre}</Text>
            <Text>Dueño: {item.usuario_nombre}</Text>
            <Text>Fecha: {item.fecha}</Text>
            <Text>Hora: {item.hora}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No hay citas registradas</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#E8F5E9" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 15,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
  },
});