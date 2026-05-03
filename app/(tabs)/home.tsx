import React from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  // Control para mostrar/ocultar botones extra
  const showExtraButtons = false; // ← cámbialo a true si quieres que aparezcan

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hola, Laura!</Text>
      <Text style={styles.subtitle}>¿Qué deseas hacer hoy?</Text>

      {/* Foto de la mascota */}
      <Image source={require("../../assets/milo.png")} style={styles.petImage} />

      <View style={styles.petInfo}>
        <Text style={styles.detail}>Nombre: Milo</Text>
        <Text style={styles.detail}>Tipo: Criollo</Text>
        <Text style={styles.detail}>Edad: 6 meses</Text>
        <Text style={styles.detail}>Peso: 2 kg</Text>
      </View>

      {/* Botones principales */}
      <View style={styles.grid}>
        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/profile")}>
          <Image source={require("../../assets/perfil.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Perfil</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/notifications")}>
          <Image source={require("../../assets/Notificacion.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Notificaciones</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/schedule")}>
          <Image source={require("../../assets/agendar.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Agendar Cita</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/appointments")}>
          <Image source={require("../../assets/citaspro.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Citas Programadas</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/history")}>
          <Image source={require("../../assets/Historial.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Historial</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/medications")}>
          <Image source={require("../../assets/medicamentos.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Medicamentos</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/results")}>
          <Image source={require("../../assets/resultados.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Resultados</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => router.push("/(tabs)/payments")}>
          <Image source={require("../../assets/pagos.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Pagos</Text>
        </Pressable>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9", padding: 20 },
  greeting: { fontSize: 22, fontWeight: "bold", color: "#2E7D32" },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20 },
  petImage: { width: 120, height: 120, borderRadius: 60, alignSelf: "center", marginBottom: 15 },
  petInfo: { backgroundColor: "#fff", borderRadius: 8, padding: 15, marginBottom: 20 },
  detail: { fontSize: 14, color: "#333" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  button: { width: "48%", flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 12, borderRadius: 8, marginBottom: 12 },
  icon: { width: 28, height: 28, marginRight: 8 },
  buttonText: { fontSize: 14, fontWeight: "600", color: "#2E7D32" },
});
