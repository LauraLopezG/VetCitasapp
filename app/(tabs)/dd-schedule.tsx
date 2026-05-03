import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AddSchedule() {
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mascotaId, setMascotaId] = useState("");
  const [usuarioId, setUsuarioId] = useState("");

  const handleCreate = () => {
    fetch("http://192.168.0.23/vetcitas_api/api/citas/create.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha,
        motivo,
        mascota_id: mascotaId,
        usuario_id: usuarioId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Cita creada correctamente");
          setFecha("");
          setMotivo("");
          setMascotaId("");
          setUsuarioId("");
        } else {
          alert("Error: " + data.error);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Cita</Text>
      <TextInput
        placeholder="Fecha (YYYY-MM-DD HH:MM:SS)"
        style={styles.input}
        value={fecha}
        onChangeText={setFecha}
      />
      <TextInput
        placeholder="Motivo"
        style={styles.input}
        value={motivo}
        onChangeText={setMotivo}
      />
      <TextInput
        placeholder="ID Mascota"
        style={styles.input}
        value={mascotaId}
        onChangeText={setMascotaId}
      />
      <TextInput
        placeholder="ID Usuario"
        style={styles.input}
        value={usuarioId}
        onChangeText={setUsuarioId}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
