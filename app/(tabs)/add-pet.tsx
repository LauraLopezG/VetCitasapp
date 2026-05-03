import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function AddPet() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const handleSavePet = () => {
    router.replace("/pet-added"); // navega a confirmación
  };

  return (
    <View style={styles.container}>
      {/* Logo arriba */}
      <Image source={require("../../assets/datos.png")} style={styles.icon} />

      <Text style={styles.title}>Datos de la mascota</Text>
      <Text style={styles.subtitle}>Completa la información de tu mascota 🐶🐱</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la mascota"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de mascota"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={weight}
        onChangeText={setWeight}
      />

      <Pressable style={styles.button} onPress={handleSavePet}>
        <Text style={styles.buttonText}>Guardar mascota</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#E8F5E9" },
  icon: { width: 100, height: 100, alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 10, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
