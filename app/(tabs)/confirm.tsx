import { View, Text, StyleSheet, Image } from "react-native";

export default function Confirm() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/citaconf.png")} style={styles.logo} />
      <Text style={styles.title}>¡Cita Confirmada!</Text>
      <Text style={styles.subtitle}>¡Te esperamos 🐾!</Text>
    </View>
  );
}

const PRIMARY = "#2E7D32";
const LIGHT = "#E8F5E9";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: LIGHT, padding: 25 },
  logo: { width: 90, height: 90, marginBottom: 20, resizeMode: "contain" },
  title: { fontSize: 26, fontWeight: "bold", color: PRIMARY, marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", textAlign: "center" }
});
