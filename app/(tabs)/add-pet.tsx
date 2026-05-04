import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

type Mascota = {
  id: number;
  nombre: string;
  tipo: string;
  edad: string;
  peso: string;
  usuario_id: number;
};

export default function MyPets({ navigation }: any) {
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [loading, setLoading] = useState(true);

  const usuarioId = 1;

  const getMascotas = async () => {
    try {
      const res = await fetch(
        `http://192.168.0.23/vetcitas_api/api/mascotas/read.php?usuario_id=${usuarioId}`
      );

      const data = await res.json();

      // 🔥 validar que sea array
      if (Array.isArray(data)) {
        setMascotas(data);
      } else {
        console.log("Error backend:", data);
        setMascotas([]);
      }
    } catch (error) {
      console.error("Error conexión:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMascotas();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mascotas 🐾</Text>

      <FlatList<Mascota>
        data={mascotas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("PetDetail", { mascota: item })
            }
          >
            <Text style={styles.name}>{item.nombre}</Text>
            <Text>Tipo: {item.tipo}</Text>
            <Text>Edad: {item.edad}</Text>
            <Text>Peso: {item.peso} kg</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No tienes mascotas registradas 🐶
          </Text>
        }
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddPet")}
      >
        <Text style={styles.buttonText}>+ Nueva Mascota</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: { color: "#fff", fontSize: 16 },
});