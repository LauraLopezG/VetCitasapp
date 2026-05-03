import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function PetAdded() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Imagen de confirmación */}
      <Image source={require("../../assets/mascotaana.png")} style={styles.icon} />

      <Text style={styles.title}>Mascota añadida</Text>
      <Text style={styles.subtitle}>¡Gracias por tu confianza!</Text>

      <Pressable style={styles.button} onPress={() => router.replace("/home")}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#E8F5E9", 
    padding: 20 
  },
  icon: { 
    width: 100, 
    height: 100, 
    marginBottom: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#2E7D32", 
    marginTop: 20, 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    color: "#555", 
    marginBottom: 30, 
    textAlign: "center" 
  },
  button: { 
    backgroundColor: "#2E7D32", 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 8 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "600" 
  },
});
