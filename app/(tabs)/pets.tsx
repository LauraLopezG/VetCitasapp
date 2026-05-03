import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

interface Pet {
  id: number;
  nombre: string;
  tipo: string;
  edad: string;
  peso: string;
  foto: any;
}

export default function Pets() {
  const router = useRouter();

  const [pets] = useState<Pet[]>([
    {
      id: 1,
      nombre: "Milo",
      tipo: "Criollo",
      edad: "6 meses",
      peso: "2 kg",
      foto: require("../../assets/milo.png"),
    },
    {
      id: 2,
      nombre: "Leyla",
      tipo: "Golden Retriever",
      edad: "2 años",
      peso: "20 kg",
      foto: require("../../assets/leyla.png"),
    },
  ]);

  const renderPet = ({ item }: { item: Pet }) => (
    <View style={styles.card}>
      <Image source={item.foto} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>Nombre: {item.nombre}</Text>
        <Text>Tipo: {item.tipo}</Text>
        <Text>Edad: {item.edad}</Text>
        <Text>Peso: {item.peso}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.viewText}>Ver</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderPet}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/add-pet")}
      >
        <Text style={styles.addText}>Añadir mascota</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
  info: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  viewButton: {
    padding: 8,
    backgroundColor: "#28a745",
    borderRadius: 5,
  },
  viewText: { color: "#fff", fontWeight: "bold" },
  addButton: {
    margin: 20,
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 8,
    alignItems: "center",
  },
  addText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
