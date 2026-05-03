import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router"; // navegación

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.saludo}>Hola, Laura! ¿Qué deseas hacer hoy?</Text>

     
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.frase}>Cuidamos a tus mascotas con amor 💚</Text>
      </View>

       <TouchableOpacity style={styles.button} onPress={() => router.push("/pets")}>
          <Image source={require("../../assets/datos.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Mascotas</Text>
        </TouchableOpacity>

      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/profile")}>
          <Image source={require("../../assets/perfil.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/schedule")}>
          <Image source={require("../../assets/agendar.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Agendar Cita</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/history")}>
          <Image source={require("../../assets/Historial.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/results")}>
          <Image source={require("../../assets/resultados.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Resultados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/notifications")}>
          <Image source={require("../../assets/Notificacion.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/appointments")}>
          <Image source={require("../../assets/citaspro.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Citas Programadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/medications")}>
          <Image source={require("../../assets/medicamentos.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Medicamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/payments")}>
          <Image source={require("../../assets/pagos.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Pagos</Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  saludo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  frase: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#2E7D32",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2E7D32",
  },
});
