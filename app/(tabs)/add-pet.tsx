import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

export default function AddPet() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL =
    "http://192.168.0.23/vetcitas_api/api/mascotas/create.php";

  const handleCreate = async () => {
    if (!nombre || !tipo || !edad || !peso) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    const payload = {
      nombre: nombre.trim(),
      tipo: tipo.trim(),
      edad: Number(edad),
      peso: Number(peso),
      usuario_id: 1,
    };

    console.log("ENVIANDO:", payload);

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      console.log("RESPUESTA RAW:", text);

      const data = JSON.parse(text);

      if (data.success) {
        Alert.alert("OK", "Mascota creada 🐶");
        setNombre("");
        setTipo("");
        setEdad("");
        setPeso("");

        router.push("/(tabs)/pets");
      } else {
        Alert.alert("Error", data.error || "No se pudo guardar");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Fallo de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva Mascota</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Tipo"
        style={styles.input}
        value={tipo}
        onChangeText={setTipo}
      />

      <TextInput
        placeholder="Edad"
        style={styles.input}
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Peso"
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Guardar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});