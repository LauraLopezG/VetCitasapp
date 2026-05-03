import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export default function Results() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/resultados.png")} style={styles.logo} />
      <Text style={styles.title}>Resultados</Text>

      <View style={styles.card}>
        <Image source={require("../../assets/resultados.png")} style={styles.icon} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Examen de sangre</Text>
          <Text style={styles.cardDetail}>Fecha: 21/04/2026</Text>
          <Text style={styles.cardDetail}>Estado: Disponible ✅</Text>
          <Pressable style={styles.buttonSmall}>
            <Text style={styles.buttonText}>Ver resultado</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const PRIMARY = "#2E7D32";
const LIGHT = "#E8F5E9";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: LIGHT, padding: 25 },
  logo: { width: 70, height: 70, alignSelf: "center", marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", color: PRIMARY, marginBottom: 20 },
  card: { flexDirection: "row", backgroundColor: "#FFF", borderRadius: 12, padding: 15, marginBottom: 15 },
  icon: { width: 50, height: 50, marginRight: 15 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: PRIMARY },
  cardDetail: { fontSize: 14, color: "#555" },
  buttonSmall: { backgroundColor: PRIMARY, padding: 8, borderRadius: 8, alignItems: "center", marginTop: 8, width: 120 },
  buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 14 }
});
