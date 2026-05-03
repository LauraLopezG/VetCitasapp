import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function AddPet() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [usuarioId, setUsuarioId] = useState("");

  const handleCreate = () => {
    fetch("http://192.168.0.23/vetcitas_api/api/mascotas/create.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        tipo,
        edad,
        peso,
        usuario_id: usuarioId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Mascota creada correctamente");
          setNombre("");
          setTipo("");
          setEdad("");
          setPeso("");
          setUsuarioId("");
        } else {
          alert("Error: " + data.error);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/datos.png")} style={styles.icon} />
      <Text style={styles.title}>Datos de la mascota</Text>
      <Text style={styles.subtitle}>Completa la información de tu mascota 🐶🐱</Text>

      <TextInput placeholder="Nombre" style={styles.input} value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Tipo" style={styles.input} value={tipo} onChangeText={setTipo} />
      <TextInput placeholder="Edad" style={styles.input} value={edad} onChangeText={setEdad} />
      <TextInput placeholder="Peso" style={styles.input} value={peso} onChangeText={setPeso} />
      <TextInput placeholder="ID Usuario" style={styles.input} value={usuarioId} onChangeText={setUsuarioId} />

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Guardar Mascota</Text>
      </TouchableOpacity>
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
