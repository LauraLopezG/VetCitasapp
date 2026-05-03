import React from "react";
import { View, Text, Image, StyleSheet, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";

type Pet = {
  id: string;
  nombre: string;
  tipo: string;
  edad: string;
  peso: string;
  foto: any;
};

export default function Pets() {
  const router = useRouter();

  const pets: Pet[] = [
    {
      id: "1",
      nombre: "Milo",
      tipo: "Criollo",
      edad: "6 meses",
      peso: "2 kg",
      foto: require("../../assets/milo.png"),
    },
    {
      id: "2",
      nombre: "Leyla",
      tipo: "Golden Retriever",
      edad: "2 años",
      peso: "20 kg",
      foto: require("../../assets/leyla.png"),
    },
  ];

  const renderItem = ({ item }: { item: Pet }) => (
    <View style={styles.card}>
      <Image source={item.foto} style={styles.petImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>Nombre: {item.nombre}</Text>
        <Text style={styles.detail}>Tipo: {item.tipo}</Text>
        <Text style={styles.detail}>Edad: {item.edad}</Text>
        <Text style={styles.detail}>Peso: {item.peso}</Text>
      </View>

      {/* Botón Ver */}
      <Pressable
        style={styles.viewButton}
        onPress={() => router.push(`/(tabs)/home?id=${item.id}`)}
      >
        <Text style={styles.viewText}>Ver</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 20 },
  card: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 8, padding: 15, marginBottom: 12, alignItems: "center" },
  petImage: { width: 80, height: 80, borderRadius: 40, marginRight: 12 },
  name: { fontSize: 16, fontWeight: "bold", color: "#2E7D32" },
  detail: { fontSize: 14, color: "#555" },
  viewButton: { backgroundColor: "#2E7D32", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  viewText: { color: "#fff", fontWeight: "bold" },
});
