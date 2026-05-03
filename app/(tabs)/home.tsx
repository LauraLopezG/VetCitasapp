import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, Href } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Saludo */}
      <Text style={styles.greeting}>Hola, Laura ¿qué deseas hacer hoy?</Text>

      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      {/* Botones principales */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push({ pathname: "/pets" } as unknown as Href)}
        >
          <Text style={styles.buttonText}>Mascotas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push({ pathname: "/schedule" } as unknown as Href)}
        >
          <Text style={styles.buttonText}>Citas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  greeting: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  logo: { width: 120, height: 120, marginBottom: 30 },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    margin: 10,
    width: 140,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
