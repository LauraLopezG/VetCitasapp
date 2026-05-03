import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Definimos la interfaz de mascota
interface Pet {
  id: string;
  nombre: string;
  tipo: string;
  edad: string;
  peso: string;
}

export default function Pets() {
  const [pets, setPets] = useState<Pet[]>([]); // ahora pets es un array de Pet

  useEffect(() => {
    fetch("http://192.168.0.23/vetcitas_api/api/mascotas/read.php") // usa tu IP local
      .then((res) => res.json())
      .then((data: Pet[]) => setPets(data)) // tipamos la respuesta
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mascotas</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text>Tipo: {item.tipo}</Text>
            <Text>Edad: {item.edad}</Text>
            <Text>Peso: {item.peso}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  name: { fontWeight: "bold", fontSize: 18 },
});
