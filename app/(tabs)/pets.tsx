import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Pet = {
  id: number;
  nombre: string;
  especie: string;
};

export default function Pets() {
  const router = useRouter();

  const [pets, setPets] = useState<Pet[]>([]);

  // 🔹 OBTENER MASCOTAS DEL USUARIO
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
      setPets(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerMascotas();
  }, []);

  // 🔹 RENDER
  const renderItem = ({ item }: { item: Pet }) => (
    <View style={styles.card}>
      <Image
        source={require("../../assets/milo.png")} // imagen genérica
        style={styles.petImage}
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>Nombre: {item.nombre}</Text>
        <Text style={styles.detail}>Especie: {item.especie}</Text>
      </View>

      <Pressable
  style={styles.viewButton}
  onPress={() => router.push(`/(tabs)/schedule?petId=${item.id}`)}
>
  <Text style={styles.viewText}>Agendar</Text>
</Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    alignItems: "center"
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32"
  },
  detail: {
    fontSize: 14,
    color: "#555"
  },
  viewButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6
  },
  viewText: {
    color: "#fff",
    fontWeight: "bold"
  }
});